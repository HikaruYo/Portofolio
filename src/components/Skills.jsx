import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Skills() {
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
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span></h2>

            <div className="skills-container">
                <div className="skills-box">
                    <i className='bx bx-code'></i>
                    <h3>FrontEnd</h3>
                    <p>HTML, CSS, JavaScript</p>
                </div>

                <div className="skills-box">
                    <i className='bx bx-minus-back'></i>
                    <h3>BackEnd</h3>
                    <p>Python, PHP, MySql</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
