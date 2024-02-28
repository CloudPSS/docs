import React from 'react';

/**
 * App root component.
 */
export default function Root({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <>
            <div className="medium-zoom-container"></div>
            {children}
        </>
    );
}
