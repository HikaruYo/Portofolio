import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import Violet from '../assets/Violet2.jpg';

function Home() {
    const typedRef = useRef(null);

    useEffect(() => {
        // ScrollReveal
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200,
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .skills-container, .project-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

        // Typed.js
        const typed = new Typed(typedRef.current, {
            strings: ['Web Developer', 'Data Scientist'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        // Cleanup typed instance
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, I'm</h3>
                <h1>Adithya Prasetio Hutahaean</h1>
                <h3>And I'm a <span ref={typedRef} className="multiple-text"></span></h3>
                <p></p>
                <div className="social-media">
                    <a href="https://github.com/HikaruYo"><i className='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/adithaean/"><i className='bx bxl-instagram-alt'></i></a>
                </div>
            </div>

            <div className="home-img">
                <img src={Violet} alt="Violet" />
            </div>
        </section>
    );
}

export default Home;
