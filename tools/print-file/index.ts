import { launch } from 'puppeteer';
import {
    readFileSync,
    readdirSync,
    writeFileSync,
    existsSync,
    statSync,
    unlinkSync,
    rmdirSync,
    mkdirSync,
} from 'node:fs';
import { join } from 'node:path';
import { minimatch } from 'minimatch';
import { PDFDocument, rgb } from 'pdf-lib';

// 需修改变量
const printPlace = 'E:\\code\\API\\Inv\\print'; //将此变量指向文件保存的位置，默认指向该js所在文件夹下的print文件夹
const contentHTMLPlace = 'file://E:\\code\\API\\Inv\\content.html'; //将此变量指向此文件包中的“内容.html”文件，默认指向该js所在文件夹下的文件
const TOCFilePlace = 'file://E:\\code\\API\\Inv\\table-of-content.html'; //将此变量指向此文件包中的“目录.html”文件，默认指向该js所在文件夹下的文件
const addInfo = true; //设置是否给跳转的页面加一页目录，'true'，则添加
const JsonUrl = 'https://docs.cloudpss.net/content/manifest.json'; //目录的JSON地址
const globRequire = '**/{components,about,appstudio,simstudio,funcstudio,sdknew,IESLab,DSLab}/**'; //此变量填写Glob语句，用于筛选需要打印的文件
const printFileName = '全部文件.pdf'; //此变量设置最终打印文件的文件名

/**
 *  用于保存JSON中的各个节点信息
 */
type Files = {
    documents: Record<
        string,
        {
            title: string;
            order: number;
        }
    >;
};

/**
 *  文件树形结构的结点
 */
interface FileNode {
    /**
     *  节点名，根据JSON文件中的路径确定
     */
    nodeName: string;
    /**
     * 节点order值，用于树形生成时节点排序
     */
    order: number;
    /**
     * 子节点列表
     */
    child: FileNode[];
}

const startNode: FileNode = { nodeName: '', order: 0, child: [] };
let pageNum = 1;
let TOCNum = 0;
const contentList: Array<[string, number, number]> = [];
const cachePlace: string = printPlace + '\\.cache';

/**
 * 打印网页至文档，同时统计页数，将页面名，页面层级及其开始页码放入“contentList”变量中
 * 为目录制作以及PDF整合做准备
 * @param originalName 传入页面在JSON中的路径名
 * @param fileName 传入页面中文原名
 * @param webName 传入网页地址
 * @param level 传入层级数
 */
async function printWebPages(originalName: string, fileName: string, webName: string, level: number): Promise<void> {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto(webName, { waitUntil: 'networkidle0', timeout: 0 });
    await page.evaluate(() => {
        document.querySelectorAll('a').forEach(function (element) {
            element.removeAttribute('href');
        });
    });
    await page.pdf({
        path: fileName,
        format: 'A4',
        scale: 0.7,
        printBackground: true,
        margin: {
            top: '1.27cm',
            left: '1.27cm',
            right: '1.27cm',
            bottom: '1.27cm',
        },
    });
    contentList.push([originalName, pageNum, level]);
    const dataBuffer = readFileSync(fileName);
    const data = await PDFDocument.load(dataBuffer);
    const pageCount = data.getPageCount();
    pageNum = pageNum + pageCount;
    await browser.close();
}

/**
 * 对直接跳转的网页制作类子目录的文件，此处修改“内容.html”文件，放入此时的标题名，以及其下一级目录中
 * 的内容
 * @param manifestData 传入处理后的JSON文件
 * @param tree 传入当前节点
 * @param num 传入当前文件编号
 * @param pos 传入string形式的地址，用于与JSON文件对应，读取文件名
 * @param level 传入层级数
 */
async function generateFile(
    manifestData: Files,
    tree: FileNode,
    num: number,
    pos: string,
    level: number,
): Promise<void> {
    const posInJson = '/zh-hans' + pos + '/index.md';
    const titleName: string = manifestData.documents[posInJson].title;
    const fileName =
        cachePlace + '\\' + String(num) + '. ' + manifestData.documents[posInJson].title.replace(/\//g, '-') + '.pdf';
    const originalName = manifestData.documents[posInJson].title.replace(/\//g, '-');
    const childName: string[] = [];
    for (const each of tree.child) {
        const childPosInJson = '/zh-hans' + pos + '/' + each.nodeName + '/index.md';
        const childTitle = manifestData.documents[childPosInJson].title;
        childName.push(childTitle);
    }

    const browser = await launch();
    const page = await browser.newPage();
    await page.goto(contentHTMLPlace);
    await page.evaluate((titleName) => {
        const titleElement = document.querySelector('#title');
        if (titleElement) {
            titleElement.innerHTML = titleName;
        }
    }, titleName);
    for (const eachTitle of childName) {
        const html = "<li> <p> <a herf=''>" + eachTitle + '</p> </li>';
        await page.evaluate((html) => {
            const linkSelector = document.querySelector('#link');
            if (linkSelector != null) {
                linkSelector.innerHTML += html;
            }
        }, html);
    }
    await page.pdf({
        path: fileName,
        format: 'A4',
        scale: 0.7,
        printBackground: true,
        margin: {
            top: '1.27cm',
            left: '1.27cm',
            right: '1.27cm',
            bottom: '1.27cm',
        },
    });
    contentList.push([originalName, pageNum, level]);
    const dataBuffer = readFileSync(fileName);
    const data = await PDFDocument.load(dataBuffer);
    const pageCount = data.getPageCount();
    pageNum = pageNum + pageCount;
    await browser.close();
}

/**
 * 根据“contentList”，修改“目录.html”文件，制作目录
 */
async function generateTOC(): Promise<void> {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto(TOCFilePlace);
    for (const each of contentList) {
        const html =
            "<tr><td class = 'name" + each[2] + "'>" + each[0] + "</td><td class = 'page'>" + each[1] + '</td></tr>';
        await page.evaluate((html) => {
            const getTable = document.querySelector('#table');
            if (getTable != null) {
                getTable.innerHTML += html;
            }
        }, html);
    }
    await page.pdf({
        path: cachePlace + '\\1. 目录.pdf',
        format: 'A4',
        scale: 0.7,
        printBackground: true,
        margin: {
            top: '1.27cm',
            left: '1.27cm',
            right: '1.27cm',
            bottom: '1.27cm',
        },
    });
    const dataBuffer = readFileSync(cachePlace + '\\1. 目录.pdf');
    const data = await PDFDocument.load(dataBuffer);
    const pageCount = data.getPageCount();
    TOCNum = TOCNum + pageCount;
    await browser.close();
}

/**
 * 创建树形结构
 * @param manifestData 传入处理后的JSON文件
 * @param startNode 传入当前节点，用于递归
 * @param nodeName 传入节点名列表，用于确定剩余节点
 * @param currentPos 传入string形式的地址，用于与JSON文件对应，查找order值
 */
function CreateNodeInDoc(manifestData: Files, startNode: FileNode, nodeName: string[], currentPos: string): void {
    let find = false;
    for (const eachNode of startNode.child) {
        if (eachNode.nodeName === nodeName[0]) {
            find = true;
            currentPos = currentPos + '/' + nodeName[0];
            nodeName.shift();
            if (nodeName.length !== 0) {
                CreateNodeInDoc(manifestData, eachNode, nodeName, currentPos);
            }
        }
    }
    if (!find) {
        const posName = currentPos + '/' + nodeName[0] + '/index.md';
        const order = manifestData.documents[posName].order;
        let pos = startNode.child.length;
        let i = 0;
        for (const each of startNode.child) {
            const eachOrder = each.order;
            const eachName = each.nodeName;
            if (order < eachOrder) {
                pos = i;
                break;
            } else if (order === eachOrder) {
                if (nodeName[0].localeCompare(eachName) < 0) {
                    pos = i;
                    break;
                }
            }
            i++;
        }
        const node: FileNode = { nodeName: nodeName[0], order: order, child: [] };
        startNode.child.splice(pos, 0, node);
        currentPos = currentPos + '/' + nodeName[0];
        nodeName.shift();
        if (nodeName.length !== 0) {
            CreateNodeInDoc(manifestData, node, nodeName, currentPos);
        }
        find = true;
    }
}

/**
 * 根据文件，创建文件树
 * @param manifestData 传入处理后的JSON文件
 * @param globRequire 传入glob表达式，用于进行文件筛选
 */
function buildTree(manifestData: Files, globRequire: string): void {
    const availablePos: string[] = [];
    for (const website in manifestData.documents) {
        if (website.includes('index.md') && !website.includes('/en/')) {
            if ('order' in manifestData.documents[website] && manifestData.documents[website].order != null) {
                const pos = website.replace('/zh-hans/', '').replace('/index.md', '');
                if (minimatch(website, globRequire)) {
                    availablePos.push(pos);
                }
            }
        }
    }
    for (const eachPos of availablePos) {
        let exist = true;
        const indexList: number[] = [];
        const sliceName: string[] = [];
        const nodeNameList: string[] = [];
        let pos = 0;
        while (pos < eachPos.length) {
            const val = eachPos.indexOf('/', pos);
            if (val !== -1) {
                pos = val + 1;
                indexList.push(pos);
            } else {
                pos = eachPos.length;
                indexList.push(pos);
            }
        }
        for (let i = 0; i < indexList.length - 1; i++) {
            const comPos = eachPos.slice(0, indexList[i] - 1);
            const nodeName = eachPos.slice(indexList[i - 1], indexList[i] - 1);
            sliceName.push(comPos);
            nodeNameList.push(nodeName);
            if (!availablePos.includes(comPos)) {
                exist = false;
            }
        }
        const nodeName = eachPos.slice(indexList[indexList.length - 2], indexList[indexList.length - 1]);
        nodeNameList.push(nodeName);

        if (exist === true) {
            CreateNodeInDoc(manifestData, startNode, nodeNameList, '/zh-hans');
        }
    }
}

//文件编号
let num = 2;

/**
 * 递归方式打印出文件
 * @param manifestData 传入处理后的JSON文件
 * @param tree 传入当前节点，用于递归
 * @param pos 传入string形式的地址，用于与JSON文件对应，进行打印筛选
 * @param level 传入层级数，用于目录层级确定
 */
async function iterativelyPrintFile(manifestData: Files, tree: FileNode, pos: string, level: number): Promise<void> {
    for (const eachNode of tree.child) {
        const posInJson = '/zh-hans' + pos + '/' + eachNode.nodeName + '/index.md';
        if (
            'order' in manifestData.documents[posInJson] &&
            !('redirect to' in manifestData.documents[posInJson]) &&
            manifestData.documents[posInJson].order != null
        ) {
            const fileName =
                cachePlace +
                '\\' +
                String(num) +
                '. ' +
                manifestData.documents[posInJson].title.replace(/\//g, '-') +
                '.pdf';
            const web = 'https://docs.cloudpss.net' + pos + '/' + eachNode.nodeName;
            const originalName = manifestData.documents[posInJson].title.replace(/\//g, '-');
            await printWebPages(originalName, fileName, web, level);
            num++;
            await iterativelyPrintFile(manifestData, eachNode, pos + '/' + eachNode.nodeName, level + 1);
        } else if (
            'redirect to' in manifestData.documents[posInJson] &&
            manifestData.documents[posInJson].order != null &&
            addInfo
        ) {
            await generateFile(manifestData, eachNode, num, pos + '/' + eachNode.nodeName, level);
            num++;
            await iterativelyPrintFile(manifestData, eachNode, pos + '/' + eachNode.nodeName, level + 1);
        } else if (
            'redirect to' in manifestData.documents[posInJson] &&
            manifestData.documents[posInJson].order != null &&
            !addInfo
        ) {
            const originalName = manifestData.documents[posInJson].title.replace(/\//g, '-');
            contentList.push([originalName, pageNum, level]);
            await iterativelyPrintFile(manifestData, eachNode, pos + '/' + eachNode.nodeName, level + 1);
        }
    }
}

/**
 * 对文件根据文件名进行快排
 * @param arr 文件名列表，用于快排
 * @returns 最终为文件名排序结果，用于打印输出
 */
function quickSort(arr: string[]): string[] {
    if (arr.length <= 1) return arr;
    const original = arr[0];
    const num = Number.parseInt(original.slice(0, arr[0].indexOf('.')));
    const left: string[] = [],
        right: string[] = [];
    for (let i = 1; i < arr.length; i++) {
        if (Number.parseInt(arr[i].slice(0, arr[i].indexOf('.'))) <= num) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return quickSort(left).concat([original], quickSort(right));
}

/**
 * 整合文件，添加页码脚注
 */
async function createPDF(): Promise<void> {
    const files = readdirSync(cachePlace);
    const startPage = TOCNum + 1;
    const pdfDoc = await PDFDocument.create();
    let fileName: string[] = [];

    for (const file of files) {
        fileName.push(file);
    }

    fileName = quickSort(fileName);

    for (const file of fileName) {
        const src = cachePlace + '\\' + file;
        const content = await PDFDocument.load(readFileSync(src));
        const Doc = await pdfDoc.copyPages(content, content.getPageIndices());
        for (const page of Doc) {
            pdfDoc.addPage(page);
        }
    }

    const pages = pdfDoc.getPages();
    for (const [i, page] of Object.entries(pages)) {
        const number = Number.parseInt(`${+i + 1}`);
        if (number < startPage) {
            page.drawText(convertToRomanNumeral(number), {
                x: page.getWidth() / 2,
                y: 10,
                size: 5,
                color: rgb(0, 0, 0),
            });
        } else {
            page.drawText((number - startPage + 1).toString(), {
                x: page.getWidth() / 2,
                y: 10,
                size: 5,
                color: rgb(0, 0, 0),
            });
        }
    }

    writeFileSync(printPlace + '//' + printFileName, await pdfDoc.save());
    deleteDir(cachePlace);
}

/**
 * 将页码转换为罗马数字的辅助函数
 * @param num 需转换的数值
 * @returns 罗马数字
 */
function convertToRomanNumeral(num: number): string {
    const romanSymbols = ['m', 'cm', 'd', 'cd', 'c', 'xc', 'l', 'xl', 'x', 'ix', 'v', 'iv', 'i'];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = '';
    for (let i = 0; i <= values.length; i++) {
        while (num >= values[i]) {
            result += romanSymbols[i];
            num -= values[i];
        }
    }
    return result;
}

/**
 * 删除路径及其中文件，用于在输出前清空可能存在的缓存
 * 以及在完成输出后清除缓存文件夹
 * @param Dir 需删除的路径
 */
function deleteDir(Dir: string): void {
    if (existsSync(Dir)) {
        const files = readdirSync(Dir);
        files.forEach(function (file) {
            const curPath = join(Dir, file);
            if (statSync(curPath).isDirectory()) {
                deleteDir(curPath);
            } else {
                unlinkSync(curPath);
            }
        });
        rmdirSync(Dir);
    }
}

/**
 * 打印文件
 */
async function printFile(): Promise<void> {
    const url = JsonUrl;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch JSON from ${url}`);
    }
    const manifestData: Files = (await response.json()) as Files;
    if (!existsSync(printPlace)) {
        mkdirSync(printPlace);
    }
    if (existsSync(cachePlace)) {
        deleteDir(cachePlace);
    }
    mkdirSync(cachePlace);
    buildTree(manifestData, globRequire);
    await iterativelyPrintFile(manifestData, startNode, '', 0);
    await generateTOC();
    await createPDF();
}

printFile().catch((error) => {
    new Error('An error occurred: ' + error);
});
