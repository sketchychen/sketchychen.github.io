import { ReactElement } from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Layout(): ReactElement {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dev">Developer</Link>
                    </li>
                    <li>
                        <Link to="/art">Artist</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}