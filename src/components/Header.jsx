import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const menuIconRef = useRef(null);
    const navbarRef = useRef(null);
    const location = useLocation(); // Mengambil lokasi saat ini (rute yang sedang aktif)

    useEffect(() => {
        const menuIcon = menuIconRef.current;
        const navbar = navbarRef.current;

        const handleMenuClick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        const handleScroll = () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);

            // Remove toggle icon and navbar when clicking navbar link (scroll)
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };

        menuIcon.addEventListener('click', handleMenuClick);
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listeners on component unmount
        return () => {
            menuIcon.removeEventListener('click', handleMenuClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <a href="#" className="logo">Hikaru's Domain</a>
            <nav className="navbar" ref={navbarRef}>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
                <Link to="/project" className={location.pathname === '/project' ? 'active' : ''}>Project</Link>
            </nav>
            <div id="menu-icon" className="bx bx-menu" ref={menuIconRef}></div>
        </header>
    );
}

export default Header;
