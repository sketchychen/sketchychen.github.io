import { default as About } from './About';
import { default as Artist } from './Artist';
import { default as Developer } from './Developer';
import { default as Home } from './Home';

export const pages = [
    { path: '/', title: 'Home', element: <Home />, },
    { path: '/dev', title: 'Developer', element: <Developer />, },
    { path: '/art', title: 'Artist', element: <Artist />, },
    { path: '/me', title: 'About', element: <About />, },
    { path: '/socials', title: 'Socials', element: <div />, },
]

export { About, Artist, Developer, Home };
