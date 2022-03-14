import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Developer from './pages/Developer';
import Artist from './pages/Artist';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="dev" element={<Developer />} />
                    <Route path="art" element={<Artist />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
