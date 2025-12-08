import { useHistory } from '@docusaurus/router';
import React, { useRef, useEffect, useState } from 'react';
import type { Chat } from '../../js/chat';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import IconChat from './icon.svg';

declare global {
    namespace JSX {
        /**
         * IntrinsicElements
         */
        interface IntrinsicElements {
            /**
             * 自定义聊天组件
             */
            'cwe-chat': Chat;
        }
    }
}

const ChatComponent = (): React.JSX.Element => {
    const history = useHistory();
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext();
    const [isChatEnabled, setIsChatEnabled] = useState<boolean | null>(null);

    useEffect(() => {
        const checkChatEnabled = async () => {
            if (customFields?.['HOME_URL'] !== 'https://cloudpss.net/') {
                setIsChatEnabled(false);
                return;
            }

            try {
                const response = await fetch(`${customFields['HOME_URL']}api/chat/enabled`);
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
    }, [customFields]);

    const baseUrl = `${customFields!['HOME_URL'] as string}chat`;
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
        <button
            onClick={handleButtonClick}
            className="cwe-chat-button"
            style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'var(--cloudpss-bg-color, #155EEF)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                position: 'fixed',
                bottom: '1.2rem',
                right: '1.2rem',
                zIndex: '200',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
            }}
        >
            <IconChat />
        </button>
    );
    const chatStyle = {
        '--cwe-chat-float-bottom': '1rem',
        '--cwe-chat-float-right': '1rem',
        '--cwe-chat-float-width': 'min(480px, calc(100vw - 8px * 2))',
        '--cwe-chat-float-height': 'min(720px, calc(100vh - 32px * 2.5))',
        '--cwe-chat-stick-width': 'min(480px, calc(100vw - 48px))',
        zIndex: '201',
    };
    if (isChatEnabled === null) {
        return <></>;
    }

    if (!isChatEnabled) {
        return <></>;
    }
    return (
        <>
            <cwe-chat ref={chatRef} src={baseUrl} style={chatStyle} />
            <ChatButton />
        </>
    );
};

export { ChatComponent };
