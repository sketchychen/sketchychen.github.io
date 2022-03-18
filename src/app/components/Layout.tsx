import { ReactElement } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Nav, { NavItem } from './Nav';


function Footer(): ReactElement {
    return (
        <footer className='layout-footer'>
            YEEHAW
        </footer>
    );
};

interface LayoutProps {
    pages: Array<NavItem>,
};

export default function Layout(props: LayoutProps): ReactElement {
    return (
        <div className='layout-container'>
            <header className='layout-header'>
                <div className='layout-banner'>HELLO</div>
                <Nav { ...props } />
            </header>
            <Footer />
            <div className='layout-body'>
                <Outlet />
            </div>
        </div>
    );
};