import { useHistory } from '@docusaurus/router';
import React, { useRef, useEffect } from 'react';
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

    if (customFields?.['HOME_URL'] !== 'https://cloudpss.net/') {
        return <></>;
    }

    const baseUrl = `${customFields['HOME_URL']}chat`;
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

    return (
        <>
            <cwe-chat ref={chatRef} src={baseUrl} style={chatStyle} />
            <ChatButton />
        </>
    );
};

export { ChatComponent };
