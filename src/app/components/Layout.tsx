import { ReactElement } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../../styles/layout.scss';
import Nav, { PageType } from './Nav';


function Footer(): ReactElement {
    return (
        <footer className='layout-footer'>
            YEEHAW
        </footer>
    );
}

interface LayoutProps {
    pages: Array<PageType>,
}

export default function Layout(props: LayoutProps): ReactElement {
    return (
        <div className='layout'>
            <header className='layout-header'>
                <div className='banner'>HELLO</div>
                <Nav { ...props } />
            </header>
            <Footer />
            <div className='layout-body'><Outlet /></div>
        </div>
    );
}