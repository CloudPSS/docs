import React, { useState, useMemo, useEffect } from 'react';
import { useCurrentSidebarSiblings, useDocById } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';
import type { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';
import Link from '@docusaurus/Link';
import coverImageUrl from './cover.webp';
import { TEMPLATE_PIC_DICT } from './template-record';
/** 提取当前层级的标签（仅直接子类别） */
function extractCurrentLevelTags(items: PropSidebarItem[]): Array<{ label: string; index: number }> {
    const tags: Array<{ label: string; index: number }> = [];

    for (const item of items) {
        if (item.type === 'category') {
            // 只添加当前层级的直接子类别，不包含子层级的标签
            tags.push({ label: item.label, index: items.indexOf(item) });
        }
    }

    return tags;
}

/** 获取最底层的文档项 */
function getBottomLevelItems(items: PropSidebarItem[], breadcrumbPath: string[] = []): Array<PropSidebarItem & { breadcrumbPath: string[] }> {
    const bottomItems: Array<PropSidebarItem & { breadcrumbPath: string[] }> = [];
    const selfId = 'cases-old/index';

    /**
     * 递归遍历侧边栏项，找到所有包含最底层文档的类别
     */
    function traverse(items: PropSidebarItem[], breadcrumbPath: string[] = []): void {
        for (const item of items) {
            if (item.type === 'category') {
                if (item.items && item.items.length > 0) {
                    // 检查子项是否都是链接类型（最底层）
                    const hasOnlyLinks = item.items.every((subItem) => subItem.type === 'link');
                    if (hasOnlyLinks) {
                        // 这是一个包含最底层文档的类别
                        bottomItems.push(...item.items.map((subItem) => ({ ...subItem, breadcrumbPath: [...breadcrumbPath, item.label] })));
                    } else {
                        // 继续向下遍历
                        traverse(item.items, [...breadcrumbPath, item.label]);
                    }
                }
            } else if (item.type === 'link' && item.docId !== selfId) {
                bottomItems.push({ ...item, breadcrumbPath: [...breadcrumbPath] });
            }
        }
    }
    traverse(items, breadcrumbPath);
    return bottomItems;
}

/** 获取项目完整路径 */
function getItemPath(items: PropSidebarItem[], path: string[]): PropSidebarItem[] {
    if (path.length === 0) return items;

    let currentItems = items;

    // 遍历路径中的每一层
    for (const pathItem of path) {
        let found = false;

        for (const item of currentItems) {
            if (item.type === 'category' && item.label === pathItem) {
                currentItems = item.items || [];
                found = true;
                break;
            }
        }

        if (!found) {
            return [];
        }
    }

    return currentItems;
}

/** 文档卡片组件 */
function DocCardListItem({ item, breadcrumbPath = [] }: { item: PropSidebarItem; breadcrumbPath?: string[] }): React.JSX.Element {
    if (item.type === 'link') {
        // 获取文档路径信息
        const doc = useDocById(item.docId);
        const itemCoverImage = TEMPLATE_PIC_DICT[item.label] ?? coverImageUrl;

        return (
            <div className={styles['doc-card']}>
                <Link to={item.href || '#'} className={styles['doc-card-link']}>
                    <div className={styles['doc-card-cover']}>
                        <img
                            src={itemCoverImage}
                            alt={item.label}
                            className={styles['doc-card-cover-img']}
                            onError={(e) => {
                                // 如果封面图片加载失败，使用默认图标
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>
                    <div className={styles['doc-card-header']}>
                        <h3 className={styles['doc-card-title']}>📄️ {item.label}</h3>
                    </div>
                    <div className={styles['doc-card-body']}>
                        <div className={styles['doc-card-description']}>{doc?.description}</div>
                        {breadcrumbPath.length > 0 && (
                            <div className={styles['doc-card-breadcrumb']}>
                                <span className={styles['breadcrumb-label']}>所属：</span>
                                <span className={styles['breadcrumb-path']}>{breadcrumbPath.join(' > ')}</span>
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        );
    }

    if (item.type === 'category' && item.items?.every((subItem) => subItem.type === 'link')) {
        // 最底层类别，显示为卡片组
        return (
            <div className={styles['doc-card-group']}>
                <div className={styles['doc-card-group-header']}>
                    <h3 className={styles['doc-card-group-title']}>{item.label}</h3>
                    {item.description && <p className={styles['doc-card-group-description']}>{item.description}</p>}
                </div>
                <div className={styles['doc-card-group-items']}>
                    {item.items.map((subItem, index) => (
                        <DocCardListItem key={index} item={subItem} breadcrumbPath={[...breadcrumbPath, item.label]} />
                    ))}
                </div>
            </div>
        );
    }

    return <></>;
}

/** 标签过滤组件 */
function TagFilter({
    tags,
    selectedTag,
    onTagSelect,
    showAllButton = true,
}: {
    tags: Array<{ label: string; index: number }>;
    selectedTag: string;
    onTagSelect: (tag?: { label: string; index: number }) => void;
    showAllButton?: boolean;
}) {
    return (
        <div className={styles['tag-filter']}>
            <span className={styles['filter-label']}>按类别过滤：</span>
            {showAllButton && (
                <button className={`${styles['tag-button']} ${!selectedTag ? styles['active'] : ''}`} onClick={() => onTagSelect(undefined)}>
                    全部
                </button>
            )}
            {tags.map((tag) => (
                <button
                    key={tag.index}
                    className={`${styles['tag-button']} ${selectedTag === tag.index.toString() ? styles['active'] : ''}`}
                    onClick={() => onTagSelect(tag)}
                >
                    {tag.label}
                </button>
            ))}
        </div>
    );
}

/** 搜索框组件 */
function SearchBox({ searchTerm, onSearchChange }: { searchTerm: string; onSearchChange: (term: string) => void }) {
    return (
        <div className={styles['search-container']}>
            <input
                type="text"
                placeholder="搜索案例..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className={styles['search-input']}
            />
            {searchTerm && (
                <button className={styles['clear-button']} onClick={() => onSearchChange('')}>
                    ×
                </button>
            )}
        </div>
    );
}

/** 过滤侧边栏扁平项 */
function filterSidebarFlatItems(
    sidebar: PropSidebarItem[],
    selectedPathIndex: number[],
    searchTerm: string,
): Array<PropSidebarItem & { breadcrumbPath: string[] }> {
    let currentItems = sidebar;
    const breadcrumbPath: string[] = [];
    // 遍历路径中的每一层
    for (const index of selectedPathIndex) {
        if (index >= 0 && index < currentItems.length) {
            const t = currentItems[index] as PropSidebarItemCategory;
            currentItems = t.items || [];
            if (t.label) {
                breadcrumbPath.push(t.label);
            }
        } else {
            return [];
        }
    }
    const bottomLevelItems = getBottomLevelItems(currentItems, breadcrumbPath);
    return bottomLevelItems.filter((item) => item.type === 'link' && item.label.includes(searchTerm));
}

/** 主组件 */
export default function DocExpandList(): React.JSX.Element {
    const sidebar = useCurrentSidebarSiblings();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [currentLevel, setCurrentLevel] = useState(0);
    const [selectedPath, setSelectedPath] = useState<string[]>([]);
    const [selectedPathIndex, setSelectedPathIndex] = useState<number[]>([]);

    // 获取当前层级的显示项
    const currentLevelItems = useMemo(() => {
        if (currentLevel === 0) {
            // 第零层：显示所有顶级项
            return sidebar;
        } else {
            // 其他层：基于选中的路径获取子项
            return getItemPath(sidebar, selectedPath);
        }
    }, [sidebar, currentLevel, selectedPath]);

    // 获取下一层级的相关标签
    const getNextLevelTags = (currentItems: PropSidebarItem[], targetTag: string): Array<{ label: string; index: number }> => {
        const tags: Array<{ label: string; index: number }> = [];

        // 在当前项中找到匹配的类别
        for (const item of currentItems) {
            if (item.type === 'category' && item.label === targetTag && item.items) {
                // 找到匹配的类别，提取其子类别的标签
                for (const subItem of item.items) {
                    if (subItem.type === 'category') {
                        tags.push({ label: subItem.label, index: item.items.indexOf(subItem) });
                    }
                }
            }
        }

        return tags;
    };

    // 获取当前层级的标签（基于当前层级项）
    const currentLevelTags = useMemo(() => {
        if (currentLevel === 0) {
            // 第零层：只显示直接子类别的标签
            return extractCurrentLevelTags(currentLevelItems);
        } else if (selectedTag && currentLevel === 1) {
            // 第一层：显示与选中标签相关的下一层级标签
            const parentItems = sidebar; // 第零层的所有项
            return getNextLevelTags(parentItems, selectedTag);
        } else {
            // 其他层：显示当前层级项中的类别标签
            return extractCurrentLevelTags(currentLevelItems);
        }
    }, [currentLevelItems, currentLevel, selectedTag, sidebar]);

    // 过滤后的最底层项
    const filteredBottomItems = useMemo(() => {
        return filterSidebarFlatItems(sidebar, selectedPathIndex, searchTerm);
    }, [sidebar, selectedPathIndex, searchTerm]);

    // 处理标签选择
    const handleTagSelect = (tag?: { label: string; index: number }) => {
        if (!tag) {
            // 取消选择，返回上一层
            setSelectedTag('');
            if (currentLevel > 0) {
                setCurrentLevel(currentLevel - 1);
                setSelectedPath(selectedPath.slice(0, -1));
                setSelectedPathIndex(selectedPathIndex.slice(0, -1));
            }
        } else {
            // 选择新标签，进入下一层
            setSelectedTag(tag.label);
            setCurrentLevel(currentLevel + 1);
            setSelectedPath([...selectedPath, tag.label]);
            setSelectedPathIndex([...selectedPathIndex, tag.index]);
        }
    };

    // 重置过滤
    const resetFilter = () => {
        setSelectedTag('');
        setCurrentLevel(0);
        setSelectedPath([]);
        setSelectedPathIndex([]);
    };

    useEffect(() => {
        // 挂载时执行 …
        const sidebarElement = document.querySelector('.theme-doc-sidebar-container');
        if (sidebarElement) {
            //隐藏侧边栏
            (sidebarElement as HTMLElement).style.setProperty('visibility', 'hidden');
        }
        const breadcrumbsContainer = document.querySelector('.theme-doc-breadcrumbs');
        if (breadcrumbsContainer) {
            //隐藏面包屑
            (breadcrumbsContainer as HTMLElement).style.setProperty('visibility', 'hidden');
        }
        const docFooter = document.querySelector('.theme-doc-footer');
        if (docFooter) {
            //隐藏文档底部
            (docFooter as HTMLElement).style.setProperty('visibility', 'hidden');
        }
        const paginationNav = document.querySelector('.pagination-nav');
        if (paginationNav) {
            //隐藏分页导航
            (paginationNav as HTMLElement).style.setProperty('visibility', 'hidden');
        }
        const header = document.querySelector('.theme-doc-markdown header');
        if (header) {
            //隐藏文档头部
            (header as HTMLElement).style.setProperty('visibility', 'hidden');
        }

        return () => {
            // 卸载时执行 —— 就是“注销前回调”
            if (sidebarElement) {
                // 显示侧边栏
                (sidebarElement as HTMLElement).style.setProperty('visibility', '');
            }
            // 显示面包屑
            if (breadcrumbsContainer) {
                (breadcrumbsContainer as HTMLElement).style.setProperty('visibility', '');
            }
            // 显示文档底部
            if (docFooter) {
                (docFooter as HTMLElement).style.setProperty('visibility', '');
            }
            // 显示分页导航
            if (paginationNav) {
                (paginationNav as HTMLElement).style.setProperty('visibility', '');
            }
            // 显示文档头部
            if (header) {
                (header as HTMLElement).style.setProperty('visibility', '');
            }
        };
    }, []);

    return (
        <div className={styles['doc-expand-list']}>
            <div className={styles['controls']}>
                <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                {/* 显示当前路径 */}
                <div className={styles['breadcrumb']}>
                    <button onClick={resetFilter} className={styles['breadcrumb-home']}>
                        全部
                    </button>
                    {selectedPath.length > 0 && (
                        <>
                            {selectedPath.map((path, index) => (
                                <React.Fragment key={index}>
                                    <span className={styles['breadcrumb-separator']}> &gt; </span>
                                    <button
                                        onClick={() => {
                                            setCurrentLevel(index + 1);
                                            setSelectedPath(selectedPath.slice(0, index + 1));
                                            setSelectedTag(path);
                                            setSelectedPathIndex(selectedPathIndex.slice(0, index + 1));
                                        }}
                                        className={styles['breadcrumb-item']}
                                    >
                                        {path}
                                    </button>
                                </React.Fragment>
                            ))}
                            <button onClick={() => handleTagSelect()} className={styles['breadcrumb-clear']}>
                                ✕
                            </button>
                        </>
                    )}
                </div>

                {currentLevelTags.length > 0 && (
                    <TagFilter tags={currentLevelTags} selectedTag={selectedTag} onTagSelect={handleTagSelect} showAllButton={currentLevel === 0} />
                )}
            </div>

            <section className={styles['features']}>
                {filteredBottomItems.length === 0 ? (
                    <div className={styles['no-results']}>没有找到匹配的文档</div>
                ) : (
                    <>
                        {/* 显示所有匹配的文档卡片 */}
                        {filteredBottomItems.length > 0 && (
                            <div className={styles['doc-card-grid']}>
                                {filteredBottomItems.map((item, index) => (
                                    <DocCardListItem key={index} item={item} breadcrumbPath={item.breadcrumbPath} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </section>
        </div>
    );
}
