import React from 'react';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">  </div>
            <ul className="nav-links">
                <li className="nav-link">
                    <a href="/">Home</a>
                </li>
                <li className="nav-link">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;