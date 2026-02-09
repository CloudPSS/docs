import { useHistory } from '@docusaurus/router';
import React, { useRef, useEffect, useState } from 'react';
import type { Chat } from '../../js/chat';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import IconChat from './icon.svg';
import styles from './chat.module.css';

declare global {
    namespace JSX {
        /** @inheritdoc */
        interface IntrinsicElements {
            /** 自定义聊天组件 */
            'cwe-chat': Chat;
        }
    }
}

const ChatComponent = (): React.JSX.Element => {
    const history = useHistory();
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext();
    const [isChatEnabled, setIsChatEnabled] = useState<boolean>(false);
    const homeUrl = (customFields?.['HOME_URL'] as string) ?? '/';
    useEffect(() => {
        const checkChatEnabled = async () => {
            try {
                const response = await fetch(`${homeUrl}api/chat/enabled`);
                if (response.status === 404) {
                    setIsChatEnabled(false);
                } else {
                    setIsChatEnabled(true);
                }
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Failed to check chat enabled status:', error);
                setIsChatEnabled(false);
            }
        };

        void checkChatEnabled();
    }, [homeUrl]);

    const baseUrl = `${homeUrl}chat`;
    const chatRef = useRef<Chat>(null);

    useEffect(() => {
        const chatElement = chatRef.current;
        if (chatElement) {
            const handleOpenLink = (event: Event) => {
                event.preventDefault();
                // console.log('Chat openLink event received:', event);
                const { data } = (event as unknown as { detail: { action: 'openLink'; data: string } }).detail;
                if (data) {
                    // 使用Docusaurus的history进行导航
                    const url = new URL(data);
                    history.push(url.pathname + url.search + url.hash);
                }
            };

            chatElement.addEventListener('openLink', handleOpenLink);

            // 清理函数，组件卸载时移除事件监听器
            return () => {
                chatElement.removeEventListener('openLink', handleOpenLink);
            };
        }
        return () => {
            //
        };
    }, [history]);

    const handleButtonClick = () => {
        const chatElement = chatRef.current;
        if (chatElement) {
            chatElement.toggle();
        }
    };

    const ChatButton = () => (
        <button onClick={handleButtonClick} className={`cwe-chat-button ${styles['button']}`}>
            <IconChat />
        </button>
    );
    if (!isChatEnabled) {
        return <></>;
    }
    return (
        <>
            <cwe-chat ref={chatRef} src={baseUrl} className={styles['view']} />
            <ChatButton />
        </>
    );
};

export { ChatComponent };
