import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.scss';


const pages = [
    { path: '/dev', title: 'Developer', imgUrl: '333.jpg' },
    { path: '/art', title: 'Artist', imgUrl: '333.jpg' },
    { path: '/me', title: 'About', imgUrl: '333.jpg' },
    { path: '/socials', title: 'Socials', imgUrl: '333.jpg' },
]

export default function Home(): ReactElement {
    return(
        <ul className='home-container'>
            {
                pages.map((page) => (
                    <li
                        className='home-nav-item'
                        key={ page.title }
                        style={ {
                            backgroundSize: 'cover',
                            backgroundImage: `url(${page.imgUrl})`
                        } }
                    >
                        <Link to={ page.path }>
                            { page.title }
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};