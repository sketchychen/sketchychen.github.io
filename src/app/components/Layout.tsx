import { ReactElement } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../../styles/layout.scss';
import Nav, { NavItemType } from './Nav';
import { PagePropsType } from './Page';


function Footer(): ReactElement {
    return (
        <footer className='layout-footer'>
            YEEHAW
        </footer>
    );
};

interface LayoutProps {
    pages: Array<NavItemType>,
};

export default function Layout(props: LayoutProps): ReactElement {
    return (
        <div className='layout-container'>
            <header className='layout-header'>
                <div className='banner'>HELLO</div>
                <Nav { ...props } />
            </header>
            <Footer />
            <div className='layout-body'>
                <Outlet />
            </div>
        </div>
    );
};