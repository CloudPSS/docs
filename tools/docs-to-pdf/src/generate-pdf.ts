import fs from 'node:fs/promises';
import {
    PDFArray,
    PDFDict,
    PDFDocument,
    PDFHexString,
    PDFName,
    PDFNull,
    PDFNumber,
    PDFString,
    StandardFonts,
    type PDFPage,
    type PDFRef,
} from 'pdf-lib';
import { HOST } from './constants.ts';
import type { PrintedDocument } from './print-pages.ts';

/** 以 URL 表示的文档引用，固定添加末尾的 `/` */
export type DocumentRef = `/${string}/`;

/** 生成 DocumentRef */
function toDocumentRef(url: string | URL): DocumentRef {
    if (typeof url != 'string') {
        const u = new URL(url, HOST);
        if (!u.href.startsWith(HOST)) return `/${u.href}/`;
        url = u.pathname;
    } else if (!url.startsWith('/')) {
        url = new URL(url).pathname;
    }
    if (!url.endsWith('/')) url += '/';
    return url as DocumentRef;
}

/** 树节点 */
export interface TreeNode {
    /** 文档 */
    document: PrintedDocument;
    /** 文档引用 */
    ref: DocumentRef;
    /** PDF 页面引用 */
    pageRef: PDFRef;
    /** PDF 页面跳转 */
    pageDist: PDFArray;
    /** PDF 大纲引用 */
    outlineRef: PDFRef;
    /** PDF 大纲项 */
    outlineItem: PDFDict;
    /** 子节点 */
    children: TreeNode[];
    /** 父节点 */
    parent?: TreeNode;
    /** 子节点数量 */
    count: number;
}

/** 生成 PDF */
export class PdfGenerator {
    constructor(documents: readonly PrintedDocument[], dist: string) {
        this.documents = documents;
        this.dist = dist;
    }
    readonly documents: readonly PrintedDocument[];
    readonly dist: string;
    pdf!: PDFDocument;
    readonly outline = new Map<DocumentRef, TreeNode>();
    outlinesRef!: PDFRef;
    outlinesDict!: PDFDict;
    /** 创建文档 */
    async createPdfDocument(): Promise<void> {
        this.pdf = await PDFDocument.create();
        this.pdf.setTitle('CloudPSS 知识库');
        this.pdf.setAuthor('CloudPSS');
        this.pdf.setSubject('构建开源、开放、协作、共享的 CloudPSS 生态');
        this.pdf.setLanguage('zh-Hans');
    }

    /** 创建大纲根节点 */
    createOutlineRoot(): void {
        this.outlinesRef = this.pdf.context.nextRef();
        this.outlinesDict = PDFDict.withContext(this.pdf.context);
        this.outlinesDict.set(PDFName.of('Type'), PDFName.of('Outlines'));
        this.pdf.context.assign(this.outlinesRef, this.outlinesDict);
        this.pdf.catalog.set(PDFName.of('Outlines'), this.outlinesRef);
    }

    /** 创建大纲节点 */
    createOutlineNode(document: PrintedDocument, page: PDFPage): void {
        const pageRef = page.ref;
        const outlineRef = this.pdf.context.nextRef();
        const outlineItem = PDFDict.withContext(this.pdf.context);
        outlineItem.set(PDFName.of('Title'), PDFHexString.fromText(document.title));
        outlineItem.set(PDFName.of('Parent'), this.outlinesRef);
        const pageDist = PDFArray.withContext(this.pdf.context);
        pageDist.set(0, pageRef);
        pageDist.set(1, PDFName.of('XYZ'));
        pageDist.set(2, PDFNull);
        pageDist.set(3, PDFNull);
        pageDist.set(4, PDFNull);
        outlineItem.set(PDFName.of('Dest'), pageDist);
        this.pdf.context.assign(outlineRef, outlineItem);
        const ref = toDocumentRef(document.url);
        this.outline.set(ref, {
            document,
            ref,
            pageRef,
            pageDist,
            outlineRef,
            outlineItem,
            children: [],
            count: 0,
        });
    }

    /** 更新 count */
    updateCount(node: TreeNode): number {
        let count = 0;
        for (const child of node.children) {
            count += 1 + this.updateCount(child);
        }
        node.count = count;
        return count;
    }

    /** 更新属性 */
    updateProps(node: TreeNode): void {
        if (node.count) {
            node.outlineItem.set(PDFName.of('Count'), PDFNumber.of(node.count));
            node.outlineItem.set(PDFName.of('First'), node.children[0].outlineRef);
            node.outlineItem.set(PDFName.of('Last'), node.children.at(-1)!.outlineRef);
        }
        if (node.parent) {
            node.outlineItem.set(PDFName.of('Parent'), node.parent.outlineRef);
        }
        if (node.children.length) {
            this.updateChildrenProps(node.children);
        }
    }
    /** 更新属性 */
    updateChildrenProps(children: readonly TreeNode[]): void {
        for (const [index, child] of children.entries()) {
            this.updateProps(child);
            if (children.length > 1) {
                if (index < children.length - 1) {
                    child.outlineItem.set(PDFName.of('Next'), children[index + 1].outlineRef);
                }
                if (index > 0) {
                    child.outlineItem.set(PDFName.of('Prev'), children[index - 1].outlineRef);
                }
            }
        }
    }

    /** 更新链接 */
    rewriteLinks(): void {
        for (const page of this.pdf.getPages()) {
            const annotations = page.node.Annots();
            if (!annotations) continue;
            for (let index = 0; index < annotations.size(); index++) {
                const annotation = annotations.lookupMaybe(index, PDFDict);
                if (
                    !annotation ||
                    (annotation.get(PDFName.of('Subtype')) as PDFName | undefined)?.asString() !== '/Link'
                )
                    continue;
                const a = annotation.get(PDFName.of('A')) as PDFDict | undefined;
                if (!a) continue;
                const uri = a.get(PDFName.of('URI')) as PDFString | undefined;
                if (!uri) continue;
                const uriString = uri.asString();
                if (!uriString.startsWith(HOST)) continue;
                a.set(PDFName.of('URI'), PDFString.of(uriString.replace(HOST, 'https://kb.cloudpss.net')));
                const linkRef = toDocumentRef(new URL(uriString));
                const node = this.outline.get(linkRef);
                if (!node) continue;
                annotation.set(PDFName.of('Dest'), node.pageDist.clone());
            }
        }
    }

    /** 添加页码 */
    addPageNumber(): void {
        const size = 8;
        const font = this.pdf.embedStandardFont(StandardFonts.Helvetica);
        for (const [i, page] of this.pdf.getPages().entries()) {
            const { width } = page.getSize();
            const text = `${i + 1}`;
            const textWidth = font.widthOfTextAtSize(text, size);
            page.drawText(text, {
                x: width / 2 - textWidth / 2,
                y: 30,
                size,
                font,
            });
        }
    }

    /** 生成 PDF */
    async generate(): Promise<Map<DocumentRef, TreeNode>> {
        await this.createPdfDocument();
        this.createOutlineRoot();

        // Add pages
        for (const document of this.documents) {
            const pdf = await PDFDocument.load(await fs.readFile(document.file));
            for (const [i, p] of (await this.pdf.copyPages(pdf, pdf.getPageIndices())).entries()) {
                const page = this.pdf.addPage(p);
                if (i === 0) {
                    this.createOutlineNode(document, page);
                }
            }
        }

        // build tree
        for (const [ref, node] of this.outline) {
            const parentRef = ref.replace(/\/[^/]+\/$/, '/') as DocumentRef;
            const parent = this.outline.get(parentRef);
            if (parent) {
                parent.children.push(node);
                node.parent = parent;
            }
        }

        // build outline
        const rootNodes = [...this.outline.values()].filter((node) => !node.parent);
        const rootCount = rootNodes.reduce((count, node) => count + this.updateCount(node), rootNodes.length);
        this.outlinesDict.set(PDFName.of('Count'), PDFNumber.of(rootCount));
        this.outlinesDict.set(PDFName.of('First'), rootNodes[0].outlineRef);
        this.outlinesDict.set(PDFName.of('Last'), rootNodes.at(-1)!.outlineRef);
        this.updateChildrenProps(rootNodes);

        this.rewriteLinks();
        this.addPageNumber();

        await fs.writeFile(this.dist, await this.pdf.save());
        return this.outline;
    }
}
