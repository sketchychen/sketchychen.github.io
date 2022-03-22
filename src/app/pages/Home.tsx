import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { PAGES } from 'app/pages';


export default function Home(): ReactElement {
    const pages = PAGES.filter((page) => page.path != '/');
    return(
        <ul className='home-container'>
            {
                pages.map((page) => (
                    <li
                        className='home-menu-item a-fadeindown a-stagger'
                        key={ page.title }
                        style={ {
                            backgroundSize: 'cover',
                            backgroundImage: `url(${page.imgUrl})`
                        } }
                    >
                        <NavLink to={ page.path }>
                            { page.title }
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
};