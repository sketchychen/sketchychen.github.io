import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageType } from './components/Nav';
import Layout from './components/Layout';
import Home from './pages/Home';
import Developer from './pages/Developer';
import Artist from './pages/Artist';
import About from './pages/About';


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
