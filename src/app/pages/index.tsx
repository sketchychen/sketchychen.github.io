import { default as About } from './About';
import { default as Artist } from './Artist';
import { default as Developer } from './Developer';
import { default as Home } from './Home';

export const PAGES = [
    { path: '/', title: 'Home', element: <Home />, imgUrl: '333.jpg' },
    { path: '/me', title: 'About', element: <About />, imgUrl: '333.jpg' },
    { path: '/dev', title: 'Developer', element: <Developer />, imgUrl: '333.jpg' },
    { path: '/art', title: 'Artist', element: <Artist />, imgUrl: '333.jpg' },
    { path: '/socials', title: 'Socials', element: <div />, imgUrl: '333.jpg' },
]

export { About, Artist, Developer, Home };
