import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './components';
import { PageType } from './components/Nav';
import { About, Artist, Developer, Home } from './pages';


const pages: Array<PageType> = [
    { path: '/', title: 'Home', element: <Home />, },
    { path: '/dev', title: 'Developer', element: <Developer />, },
    { path: '/art', title: 'Artist', element: <Artist />, },
    { path: '/me', title: 'Artist', element: <About />, },
]

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout pages={ pages } />}>
                    {
                        pages.map((page: PageType) => (
                            <Route
                                key={ page.title }
                                path={ page.path }
                                element={ page.element }
                            >
                                { page.title }
                            </Route>
                        ))
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
