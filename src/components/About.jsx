import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import me from '../assets/me.jpg';

function About() {
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
    }, []);

    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={me} alt="My photo" />
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3><span>BackEnd</span> Developer!</h3>
                <p>My name is Adithya Prasetio Hutahaean, I was born in Semarang on January 29 2008. I am a BackEnd Developer. Currently I am studying at SMK Negeri 8 Semarang class 11 PPLG 1. I love gazing at the beautiful stars on a quiet night. My hobbies are watching anime, reading comics, and playing games. I also like workout and want to have an athletic body.</p>
            </div>
        </section>
    )
}

export default About;
