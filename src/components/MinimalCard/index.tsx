import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/** 极简聚焦卡片属性 */
export interface MinimalCardProps {
    /** 卡片标题 */
    title: string;
    /** 卡片描述 */
    description?: string;
    /** 封面图片地址 */
    coverUrl: string;
    /** 跳转链接 */
    href: string;
    /** 封面 alt 文本 */
    coverAlt?: string;
    /** 是否在深色模式下对封面进行反色处理 */
    isDarkInvert?: boolean;
    /** 图片加载失败时是否隐藏 */
    hideOnError?: boolean;
}

/** 极简聚焦卡片（基于 card-item-minimal.vue 样式） */
export default function MinimalCard({
    title,
    description = '',
    coverUrl,
    href,
    coverAlt,
    isDarkInvert = false,
    hideOnError = false,
}: MinimalCardProps): React.JSX.Element {
    const displayDescription = description.length > 0 ? description : '\u00A0';

    return (
        <Link to={href} className={styles['minimal-card-link']}>
            <div className={styles['minimal-card']}>
                <div className={styles['cover-wrapper']}>
                    <img
                        src={coverUrl}
                        alt={coverAlt || title}
                        className={`${styles['cover']} ${isDarkInvert ? styles['dark-invert'] : ''}`}
                        onError={
                            hideOnError
                                ? (e) => {
                                      e.currentTarget.style.display = 'none';
                                  }
                                : undefined
                        }
                        loading="lazy"
                    />
                </div>
                <div className={styles['arrow-wrapper']}>
                    <div className={styles['arrow-button']} aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className={styles['content']}>
                    <div className={styles['title']} title={title}>
                        {title}
                    </div>
                    <div className={styles['description']} title={description}>
                        {displayDescription}
                    </div>
                </div>
            </div>
        </Link>
    );
}
