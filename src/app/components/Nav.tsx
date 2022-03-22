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
    const hideBackToHome = {
        visibility: 'hidden',
    }
    return (
        <nav className='header-nav'>
            <ul className='header-nav-container'>
                <li className='header-nav-item'>
                    <NavLink
                        className='nav-block'
                        style={
                            ({ isActive }) => isActive ? hideBackToHome : {}
                        }
                        to="/"
                    >
                        Back to Home
                    </NavLink>
                </li>
                {/* {
                    props.pages.map((page: NavItem) => (
                        <li className='header-nav-item' key={ page.title }>
                            <NavLink className='nav-block' to={ page.path }>
                                { page.title }
                            </NavLink>
                        </li>
                    ))
                } */}
            </ul>
        </nav>
    );
};
