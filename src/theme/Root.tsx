import React from 'react';
import { ChatComponent } from '../components/Chat/chat';

/**
 * App root component.
 */
export default function Root({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <>
            <ChatComponent />
            <div className="medium-zoom-container"></div>
            {children}
        </>
    );
}
