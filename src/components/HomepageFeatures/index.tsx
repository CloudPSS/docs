import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import documents from '@site/static/img/documents.svg';
import cases from '@site/static/img/cases.svg';
import tutorials from '@site/static/img/tutorials.svg';

/** 列表项 */
type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '文档',
        Svg: documents,
        description: <>持续更新的 CloudPSS 全套产品完整说明文档。</>,
    },
    {
        title: '案例',
        Svg: cases,
        description: <>不断分享海量 CloudPSS 官方案例、行业典型案例和学术研究案例。建设中，敬请期待！</>,
    },
    {
        title: '教程',
        Svg: tutorials,
        description: <>免费、开源的仿真教程及课程。Step by Step，上手 CloudPSS。建设中，敬请期待！</>,
    },
];

/** 列表项 */
function Feature({ title, Svg, description }: FeatureItem): React.JSX.Element {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles['featureSvg']} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

/** 列表 */
export default function HomepageFeatures(): React.JSX.Element {
    return (
        <section className={styles['features']}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
