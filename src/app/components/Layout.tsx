import { ReactElement } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Nav, { NavItem } from './Nav';


function Footer(): ReactElement {
    return (
        <footer className='layout-footer'>
            YEEHAW i'M A FOOTER
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
                <h1 className='layout-banner'>REY CHEN</h1>
                <Nav { ...props } />
            </header>
            <div className='layout-body'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};