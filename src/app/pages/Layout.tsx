import { ReactElement } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../../styles/layout.scss';
import { PageType } from '../index';


interface HeaderPropType {
    pages: Array<PageType>,
}

function Header (props: HeaderPropType): ReactElement {
    return (
        <header className='layout-header'>
            <div className='banner'>HELLO</div>
            <nav>
                <ul>
                    {
                        props.pages.map((page: PageType) => (
                            <li>
                                <Link to={ page.path }>
                                    { page.title }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

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
            <Header pages={ props.pages } />
            <Footer />
            <div className='layout-body'><Outlet /></div>
        </div>
    );
}