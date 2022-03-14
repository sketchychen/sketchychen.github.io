import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Developer from './pages/Developer';
import Artist from './pages/Artist';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dev" element={<Developer />} />
        <Route path="art" element={<Artist />} />
      </Routes>
    </BrowserRouter>
  );
}
