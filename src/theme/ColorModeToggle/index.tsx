import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type { WrapperProps } from '@docusaurus/types';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useColorMode } from '@docusaurus/theme-common';
import { useEffect, useMemo } from 'react';

/** Wrapped props */
type Props = WrapperProps<typeof ColorModeToggleType>;

/** Wrapped ColorModeToggle */
export default function ColorModeToggleWrapper(props: Props): JSX.Element {
    const isBrowser = useIsBrowser();
    const { colorMode } = useColorMode();
    const metaThemeColor = useMemo(() => {
        if (!isBrowser) return null;
        const current = document.querySelector('meta[name=theme-color]');
        if (current) return current as HTMLMetaElement;
        const created = document.createElement('meta');
        created.name = 'theme-color';
        created.content = '#fff';
        document.head.append(created);
        return created;
    }, [isBrowser]);

    useEffect(() => {
        if (!metaThemeColor) return;
        if (metaThemeColor.dataset['colorMode'] === colorMode) return;

        metaThemeColor.dataset['colorMode'] = colorMode;
        requestAnimationFrame(() => {
            const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--ifm-navbar-background-color');
            metaThemeColor.content = themeColor;
        });
    }, [colorMode, metaThemeColor]);

    return (
        <>
            <ColorModeToggle {...props} />
        </>
    );
}
