import React from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/TabItem';

import styles from './styles.module.css';

/**
 * TabItem
 */
export default function TabItem({ children, className, attributes: _, ...rest }: Props): JSX.Element {
    return (
        <div role="tabpanel" className={clsx(styles['tabItem'], className)} {...rest}>
            {children}
        </div>
    );
}
