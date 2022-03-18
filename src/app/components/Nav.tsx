import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';


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
                            <NavLink className='nav-block' to={ page.path }>
                                { page.title }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};
