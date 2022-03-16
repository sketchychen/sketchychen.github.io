import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from 'app/components';
import { About, Artist, Developer, Home } from 'app/pages';



const pages = [
    { path: '/', title: 'Home', element: <Home />, },
    { path: '/dev', title: 'Developer', element: <Developer />, },
    { path: '/art', title: 'Artist', element: <Artist />, },
    { path: '/me', title: 'Artist', element: <About />, },
]

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout pages={ pages } /> }>
                    {
                        pages.map(page => (
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
