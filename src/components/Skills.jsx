import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const FrontEnd = () => {
    return (
        <div className="skills-box">
            <i className='bx bx-code'></i>
            <h3>FrontEnd</h3>
            <p>HTML, CSS, JavaScript</p>
        </div>
    )
}

const BackEnd = () => {
    return (
        <div className="skills-box">
            <i className='bx bx-minus-back'></i>
            <h3>BackEnd</h3>
            <p>Python, PHP, MySql</p>
        </div>
    )
}

function Skills() {
    const [activeComponent, setActiveComponent] = useState('FrontEnd'); // State untuk melacak komponen aktif

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
                <div className="skills-header">
                    <a href="#!" onClick={() => setActiveComponent('FrontEnd')}>Front End</a>
                    <a href="#!" onClick={() => setActiveComponent('BackEnd')}>Back End</a>
                </div>

                {/* Render komponen berdasarkan state aktif */}
                {activeComponent === 'FrontEnd' && <FrontEnd />}
                {activeComponent === 'BackEnd' && <BackEnd />}
            </div>
        </section>
    );
}

export default Skills;
