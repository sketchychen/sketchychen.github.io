import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'app/components';
import { pages } from 'app/pages';
import '../styles/index.scss';

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
