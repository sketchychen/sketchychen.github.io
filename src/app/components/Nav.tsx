import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.scss';


export type NavItem = {
    title: string,
    path: string,
};

interface NavProps {
    pages: Array<NavItem>,
};

export default function Nav(props: NavProps) {
    return (
        <nav className='header-nav'>
            <ul className='header-nav-container'>
                {
                    props.pages.map((page: NavItem) => (
                        <li className='header-nav-item' key={ page.title }>
                            <Link to={ page.path }>
                                { page.title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};
