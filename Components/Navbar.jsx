import React from 'react';
import CustomLink from './CustomLink';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"></div>
            <ul className="nav-links">
                <li className="nav-link">
                    <CustomLink targetId="home-section">Home</CustomLink>
                </li>
                <li className="nav-link">
                    <CustomLink targetId="contact-section">Contact</CustomLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
