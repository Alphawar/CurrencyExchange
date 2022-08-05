import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children, table }) => {

    return (
        <>
            <Header table={table}/>
            {children}
        </>
    );
};

export default Layout;