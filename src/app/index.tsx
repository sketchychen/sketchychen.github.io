import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Developer from './pages/Developer';
import Artist from './pages/Artist';

export type PageType = { title: string, path: string, element: ReactElement };

const pages: Array<PageType> = [
    { path: '/', title: 'Home', element: <Home />, },
    { path: '/dev', title: 'Developer', element: <Developer />, },
    { path: '/art', title: 'Artist', element: <Artist />, },
]

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout pages={ pages } />}>
                    {
                        pages.map((page: PageType) => (
                            <Route path={ page.path } element={ page.element }>
                                { page.title }
                            </Route>
                        ))
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
