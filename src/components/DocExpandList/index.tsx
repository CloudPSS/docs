import React, { useState, useMemo, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useHistory, useLocation } from '@docusaurus/router';
import { useCurrentSidebarSiblings, useDocById, useDocsSidebar, useDocsVersion } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';
import type { PropSidebarItem, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import coverImageUrl from './cover.webp';
import { TEMPLATE_PIC_DICT } from './template-record';
import MinimalCard from '../MinimalCard';
import emtLabIcon from './assets/icons/emt-lab.svg?url';
import dsLabIcon from './assets/icons/dslab.svg?url';
import iesIcon from './assets/icons/ies.svg?url';
import appStudioIcon from './assets/icons/appstudio.svg?url';
import allIcon from './assets/icons/all.svg?url';

/**
 * 导航栏项
 * @param value 导航栏项值
 * @param label 导航栏项显示文本
 * @param disabled 是否禁用
 * @param icon 导航栏项图标
 */
interface NavItem {
    /**
     * 导航栏项值
     */
    value: string;
    /**
     * 导航栏项显示文本
     */
    label: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 导航栏项图标
     */
    icon?: string;
}

const navs: NavItem[] = [
    {
        value: '*',
        label: '所有',
        icon: allIcon,
    },
    {
        value: 'emtlab',
        label: 'EMTLab',
        icon: emtLabIcon,
    },
    {
        value: 'ieslab',
        label: 'IESLab',
        icon: iesIcon,
    },
    {
        value: 'dslab',
        label: 'DSLab',
        icon: dsLabIcon,
    },
    {
        value: 'xstudio',
        label: 'XStudio',
        icon: appStudioIcon,
    },
];

/** 归组后的单个卡片项，附带全局锚点索引 */
type GroupItem = PropSidebarItemLink & { breadcrumbPath: string[]; anchorIndex: number };

/** 按 breadcrumbPath 归组后的卡片分组 */
interface CardGroup {
    /** 分组唯一键（breadcrumbPath 拼接而成） */
    key: string;
    /** 该分组对应的面包屑路径 */
    breadcrumbPath: string[];
    /** 该分组下的卡片项 */
    items: GroupItem[];
}

/** 右侧目录树节点 */
interface TocTreeNode {
    /** 节点显示文本 */
    label: string;
    /** 对应分组 section 的锚点 id */
    id?: string;
    /** 子节点 */
    children: TocTreeNode[];
}

/** 查找目录树中第一个带有锚点 id 的后代节点 */
function findFirstDescendantId(node: TocTreeNode): string | undefined {
    for (const child of node.children) {
        if (child.id) return child.id;
        const id = findFirstDescendantId(child);
        if (id) return id;
    }
    return undefined;
}

/** 根据 docId 生成面包屑 docId 路径（逐级前缀并补回 /index） */
function getBreadcrumbDocIds(docId: string): string[] {
    const prefix = docId.replace(/\/index$/, '');
    const segments = prefix.split('/').filter(Boolean);
    const r = segments.map((_, index) => `${segments.slice(0, index + 1).join('/')}/index`);
    r.pop();
    r.shift();

    if (r.some((item) => item.includes('opencloudpss-cases')) && r.length > 3) {
        r.pop();
    }
    return r;
}

/** 获取最底层的文档项，breadcrumbDocIds 由每个叶子项的 docId 派生，不再由顶层传入 */
function getBottomLevelItems(items: PropSidebarItem[]): Array<PropSidebarItem & { breadcrumbDocIds: string[] }> {
    const bottomItems: Array<PropSidebarItem & { breadcrumbDocIds: string[] }> = [];
    const selfIds = ['cases-old/index', 'cases/index', 'casehub/index'];

    /**
     * 递归遍历文档项，获取最底层的文档项
     */
    function traverse(items: PropSidebarItem[]): void {
        for (const item of items) {
            if (item.type === 'category') {
                if (item.items && item.items.length > 0) {
                    const hasOnlyLinks = item.items.every((subItem) => subItem.type === 'link');
                    if (hasOnlyLinks) {
                        bottomItems.push(
                            ...item.items.map((subItem) => ({
                                ...subItem,
                                breadcrumbDocIds: (subItem as PropSidebarItemLink).docId ? getBreadcrumbDocIds((subItem as PropSidebarItemLink).docId!) : [],
                            })),
                        );
                    } else {
                        traverse(item.items);
                    }
                }
            } else if (item.type === 'link' && !selfIds.includes(item.docId!)) {
                bottomItems.push({ ...item, breadcrumbDocIds: item.docId ? getBreadcrumbDocIds(item.docId) : [] });
            }
        }
    }
    traverse(items);
    return bottomItems;
}

/** 批量解析一组 docId 对应的 title（复用 useDocsVersion，与逐个 useDocById 等价） */
function useBreadcrumbTitleMap(docIds: string[]): Map<string, string> {
    const version = useDocsVersion();
    return useMemo(() => {
        const map = new Map<string, string>();
        for (const id of docIds) {
            const doc = version.docs[id];
            if (doc) {
                map.set(id, doc.title);
            }
        }
        return map;
    }, [version, docIds]);
}

/** 文档卡片组件 */
function DocCardListItem({ item, id }: { item: PropSidebarItem; id?: string }): React.JSX.Element {
    if (item.type === 'link') {
        const doc = useDocById(item.docId);
        const itemCoverImage = TEMPLATE_PIC_DICT[item.label] ?? coverImageUrl;

        return (
            <div id={id}>
                <MinimalCard
                    title={item.label}
                    description={doc?.description}
                    coverUrl={itemCoverImage}
                    href={item.href || '#'}
                    coverAlt={item.label}
                    isDarkInvert={itemCoverImage !== coverImageUrl}
                    hideOnError
                />
            </div>
        );
    }

    if (item.type === 'category' && item.items?.every((subItem) => subItem.type === 'link')) {
        return (
            <div className={styles['doc-card-group']} id={id}>
                <div className={styles['doc-card-group-header']}>
                    <h3 className={styles['doc-card-group-title']}>{item.label}</h3>
                    {item.description && <p className={styles['doc-card-group-description']}>{item.description}</p>}
                </div>
                <div className={styles['doc-card-group-items']}>
                    {item.items.map((subItem, index) => (
                        <DocCardListItem key={index} item={subItem} />
                    ))}
                </div>
            </div>
        );
    }

    return <></>;
}

/** 主组件 */
export default function DocExpandList(): React.JSX.Element {
    const sidebar = useCurrentSidebarSiblings();
    const docsSidebar = useDocsSidebar();
    const isFallback = sidebar === docsSidebar?.items;
    const history = useHistory();
    const location = useLocation();

    /** 当前激活的顶部导航 */
    const activeNav = useMemo(() => {
        const { pathname } = location;
        if (pathname === '/casehub/' || pathname === '/casehub') {
            return '*';
        }
        const matched = navs.find((nav) => nav.value !== '*' && pathname.startsWith(`/casehub/${nav.value}/`));
        return matched?.value ?? '*';
    }, [location]);

    const isEmptySubSection = isFallback && activeNav !== '*';

    const featuresRef = useRef<HTMLElement>(null);

    const filteredBottomItems = useMemo(() => {
        return getBottomLevelItems(sidebar).filter(
            (item): item is PropSidebarItemLink & { breadcrumbDocIds: string[] } => item.type === 'link' && item.breadcrumbDocIds.length > 0,
        );
    }, [sidebar]);

    const allBreadcrumbDocIds = useMemo(() => {
        return Array.from(new Set(filteredBottomItems.flatMap((item) => item.breadcrumbDocIds)));
    }, [filteredBottomItems]);

    const titleMap = useBreadcrumbTitleMap(allBreadcrumbDocIds);

    const [activeAnchor, setActiveAnchor] = useState<string>('');

    /** 按 breadcrumbPath（title 数组）归组，保持原始顺序，并保留全局锚点索引 */
    const groupedItems = useMemo(() => {
        const groups: CardGroup[] = [];
        const groupMap = new Map<string, CardGroup>();
        for (const [index, item] of filteredBottomItems.entries()) {
            const breadcrumbPath = item.breadcrumbDocIds.map((docId) => titleMap.get(docId) ?? docId);
            const key = breadcrumbPath.join(' / ');
            let group = groupMap.get(key);
            if (!group) {
                group = { key, breadcrumbPath, items: [] };
                groupMap.set(key, group);
                groups.push(group);
            }
            group.items.push({ ...item, breadcrumbPath, anchorIndex: index });
        }
        return groups;
    }, [filteredBottomItems, titleMap]);

    /** 根据 breadcrumbPath 构建右侧目录树，相同路径合并 */
    const tocTree = useMemo((): TocTreeNode[] => {
        const root: TocTreeNode[] = [];
        for (const [groupIndex, group] of groupedItems.entries()) {
            let current = root;
            for (const [segmentIndex, segment] of group.breadcrumbPath.entries()) {
                let node = current.find((n) => n.label === segment);
                if (!node) {
                    const isLast = segmentIndex === group.breadcrumbPath.length - 1;
                    node = { label: segment, id: isLast ? `group-anchor-${groupIndex}` : undefined, children: [] };
                    current.push(node);
                }
                current = node.children;
            }
        }
        return root;
    }, [groupedItems]);

    // console.log(groupedItems);

    /** 点击目录滚动到对应锚点 */
    const scrollToAnchor = (id: string) => {
        const element = document.querySelector(`#${CSS.escape(id)}`);
        if (!element) return;
        const navHeight = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    /** 递归渲染目录树 */
    function renderTocTree(nodes: TocTreeNode[], depth = 0): React.ReactNode {
        return nodes.map((node, index) => (
            <React.Fragment key={`${depth}-${index}`}>
                <button
                    type="button"
                    className={`${styles['toc-link']} ${node.id && activeAnchor === node.id ? styles['active'] : ''}`}
                    style={{ paddingLeft: `calc(${0.75 + depth * 0.75}rem - 2px)` }}
                    onClick={() => {
                        if (node.id) {
                            scrollToAnchor(node.id);
                        } else {
                            const firstDescendantId = findFirstDescendantId(node);
                            if (firstDescendantId) scrollToAnchor(firstDescendantId);
                        }
                    }}
                    title={node.label}
                >
                    {node.label}
                </button>
                {node.children.length > 0 && renderTocTree(node.children, depth + 1)}
            </React.Fragment>
        ));
    }

    useEffect(() => {
        if (tocTree.length === 0) return;

        const sectionIds: string[] = [];
        /** 递归收集所有分组 section 的锚点 id */
        function collectSectionIds(nodes: TocTreeNode[]): void {
            for (const node of nodes) {
                if (node.id) {
                    sectionIds.push(node.id);
                }
                collectSectionIds(node.children);
            }
        }
        collectSectionIds(tocTree);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible: string[] = entries
                    .filter((entry) => entry.isIntersecting)
                    .map((entry) => entry.target.getAttribute('id'))
                    .filter(Boolean) as string[];
                if (visible.length > 0) {
                    setActiveAnchor(visible[0]!);
                }
            },
            { rootMargin: '-10% 0px -75% 0px', threshold: 0 },
        );

        for (const id of sectionIds) {
            const el = document.querySelector(`#${CSS.escape(id)}`);
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    }, [tocTree]);

    useEffect(() => {
        const sidebarElement = document.querySelector('.theme-doc-sidebar-container');
        if (sidebarElement) {
            (sidebarElement as HTMLElement).style.setProperty('display', 'none');
        }
        const breadcrumbsContainer = document.querySelector('.theme-doc-breadcrumbs');
        if (breadcrumbsContainer) {
            (breadcrumbsContainer as HTMLElement).style.setProperty('display', 'none');
        }
        const docFooter = document.querySelector('.theme-doc-footer');
        if (docFooter) {
            (docFooter as HTMLElement).style.setProperty('visibility', 'hidden');
        }
        const paginationNav = document.querySelector('.pagination-nav');
        if (paginationNav) {
            (paginationNav as HTMLElement).style.setProperty('visibility', 'hidden');
        }
        const header = document.querySelector('.theme-doc-markdown header');
        if (header) {
            (header as HTMLElement).style.setProperty('display', 'none');
        }

        // 为 docMainContainer main 元素添加 position: relative
        const mainContainer = document.querySelector('main');
        if (mainContainer && Array.from(mainContainer.classList).some((c) => c.startsWith('docMainContainer'))) {
            mainContainer.style.setProperty('position', 'relative');
            mainContainer.style.setProperty('max-width', '100%');
            mainContainer.style.setProperty('overflow-x', 'clip');
        }

        // 解除上层 container 限制，让组件铺满 main wrapper
        const container = mainContainer?.querySelector('.container') as HTMLElement | null;
        const row = container?.querySelector('.row') as HTMLElement | null;
        const cols = row?.querySelectorAll('.col');
        const contentCol = cols?.[0] as HTMLElement | undefined;
        const tocCol = row?.querySelector('.col--3') as HTMLElement | null;

        container?.style.setProperty('max-width', 'none', 'important');
        container?.style.setProperty('padding', '0', 'important');
        container?.style.setProperty('background-color', 'var(--ifm-code-background)');
        row?.style.setProperty('margin', '0', 'important');
        contentCol?.style.setProperty('max-width', '100%', 'important');
        contentCol?.style.setProperty('flex', '0 0 100%', 'important');
        contentCol?.style.setProperty('padding', '0', 'important');
        tocCol?.style.setProperty('display', 'none', 'important');

        return () => {
            if (sidebarElement) {
                (sidebarElement as HTMLElement).style.removeProperty('display');
            }
            if (breadcrumbsContainer) {
                (breadcrumbsContainer as HTMLElement).style.removeProperty('display');
            }
            if (docFooter) {
                (docFooter as HTMLElement).style.setProperty('visibility', '');
            }
            if (paginationNav) {
                (paginationNav as HTMLElement).style.setProperty('visibility', '');
            }
            if (header) {
                (header as HTMLElement).style.setProperty('visibility', '');
            }
            if (mainContainer && Array.from(mainContainer.classList).some((c) => c.startsWith('docMainContainer'))) {
                mainContainer.style.removeProperty('position');
                mainContainer.style.removeProperty('max-width');
                mainContainer.style.removeProperty('overflow-x');
            }
            container?.style.removeProperty('max-width');
            container?.style.removeProperty('padding');
            container?.style.removeProperty('background-color');
            row?.style.removeProperty('margin');
            contentCol?.style.removeProperty('max-width');
            contentCol?.style.removeProperty('flex');
            contentCol?.style.removeProperty('padding');
            tocCol?.style.removeProperty('display');
        };
    }, []);

    return (
        <div className={clsx(styles['doc-expand-list'], (isEmptySubSection || tocTree.length === 0) && styles['no-anchor'])}>
            <div className={styles['main-content']}>
                <div className={styles['content-body']}>
                    <nav className={styles['nav-tabs']}>
                        {navs
                            .filter((nav) => !nav.disabled)
                            .map((nav) => (
                                <button
                                    key={nav.value}
                                    type="button"
                                    className={`${styles['nav-tab']} ${activeNav === nav.value ? styles['active'] : ''} ${nav.disabled ? styles['disabled'] : ''}`}
                                    disabled={nav.disabled}
                                    onClick={() => {
                                        if (nav.disabled) return;
                                        const path = nav.value === '*' ? '/casehub/' : `/casehub/${nav.value}/`;
                                        history.push(path);
                                    }}
                                >
                                    {nav.icon && <img src={nav.icon} alt="" className={styles['nav-tab-icon']} />}
                                    <span>{nav.label}</span>
                                </button>
                            ))}
                    </nav>
                    <section ref={featuresRef} className={styles['features']}>
                        {isEmptySubSection || filteredBottomItems.length === 0 ? (
                            <div className={styles['no-results']}>建设中，敬请期待</div>
                        ) : (
                            groupedItems.map((group, groupIndex) => (
                                <div key={group.key} id={`group-anchor-${groupIndex}`} className={styles['hierarchy-section']}>
                                    <h2 className={styles['section-title']}>
                                        <span className={styles['section-title-text']}>{group.breadcrumbPath.join(' - ')}</span>
                                        <span className={styles['section-divider']} />
                                        <span className={styles['section-count']}>{group.items.length}</span>
                                    </h2>
                                    <div className={styles['doc-card-grid']}>
                                        {group.items.map((item) => (
                                            <DocCardListItem key={item.anchorIndex} item={item} id={`anchor-${item.anchorIndex}`} />
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </section>
                </div>
                {!isEmptySubSection && tocTree.length > 0 && (
                    <aside className={styles['anchor-nav']}>
                        <nav>{renderTocTree(tocTree)}</nav>
                    </aside>
                )}
            </div>
        </div>
    );
}
