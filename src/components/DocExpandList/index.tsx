import React from 'react';
import { useCurrentSidebarSiblings } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';

/** 列表 */
function DocList({ item }: { item: PropSidebarItem }): React.JSX.Element {
    switch (item.type) {
        case 'category':
            return (
                <div className={styles['feature-item']}>
                    <a href={item.href || '#'} className={styles['feature-link']}>
                        {item.label}
                    </a>
                    {item.items ? (
                        <ul className={styles['feature-sublist']}>
                            {item.items.map((sub) => (
                                <DocList item={sub} />
                            ))}
                        </ul>
                    ) : null}
                </div>
            );
        case 'html':
            return <div dangerouslySetInnerHTML={{ __html: item.value }} />;
        case 'link':
            return (
                <li className={styles['feature-subitem']}>
                    <a href={item.href || '#'} className={styles['feature-sublink']}>
                        {item.label}
                    </a>
                </li>
            );
    }
}

/** 列表 */
export default function DocExpandList(): React.JSX.Element {
    const sidebar = useCurrentSidebarSiblings();
    return (
        <section className={styles['features']}>
            {sidebar.map((item) => (
                <DocList item={item} />
            ))}
        </section>
    );
}
