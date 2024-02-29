import React from 'react';
import Translate from '@docusaurus/Translate';
import Details from '@theme/Details';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import type { Props } from '@theme/Admonition';

/**
 * summary
 */
function AdmonitionSummary({ title, children, ...props }: Props): React.JSX.Element {
    const summary = <summary>{title ?? <Translate>详细信息</Translate>}</summary>;
    return (
        <Details {...props} summary={summary}>
            {children}
        </Details>
    );
}

export default {
    ...DefaultAdmonitionTypes,
    summary: AdmonitionSummary,
};
