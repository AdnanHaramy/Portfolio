"use client"
import { useEffect } from 'react';
const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
};
const CustomLink = ({ href, children, targetId }) => {
    const handleClick = (e) => {
        e.preventDefault();
        smoothScrollTo(targetId);
    };
    return (
        <a href="#" onClick={handleClick}>
            {children}
        </a>
    );
};
export default CustomLink;
