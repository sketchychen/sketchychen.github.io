import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/nav.scss';


export type PageType = { title: string, path: string, element?: ReactElement };

interface NavPropsType {
    pages: Array<PageType>,
}

export default function Nav(props: NavPropsType) {
    return (
        <nav className='header-nav'>
            <ul className='header-nav-container'>
                {
                    props.pages.map((page: PageType) => (
                        <li className='header-nav-link' key={ page.title }>
                            <Link to={ page.path }>
                                { page.title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

