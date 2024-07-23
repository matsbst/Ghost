import clsx from 'clsx';
import React from 'react';
import {FetchKoenigLexical} from './global/form/HtmlEditor';
import DesignSystemProvider from './providers/DesignSystemProvider';

export interface DesignSystemAppProps extends React.HTMLProps<HTMLDivElement> {
    darkMode: boolean;
    addBaseClass: boolean;
    fetchKoenigLexical: FetchKoenigLexical;
}

const DesignSystemApp: React.FC<DesignSystemAppProps> = ({darkMode, addBaseClass = true, fetchKoenigLexical, className, children, ...props}) => {
    const appClassName = clsx(
        addBaseClass && 'admin-x-base',
        darkMode && 'dark',
        className
    );

    return (
        <div className={appClassName} {...props}>
            <DesignSystemProvider fetchKoenigLexical={fetchKoenigLexical}>
                {children}
            </DesignSystemProvider>
        </div>
    );
};

export default DesignSystemApp;
