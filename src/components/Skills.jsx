import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const Language = () => {
    return (
        <div className="skills-box-section">
            <div className="skills-box">
                <i className="devicon-html5-plain"></i>
                <h3>HTML</h3>
            </div>
            <div className="skills-box">
                <i className="devicon-css3-plain"></i>
                <h3>CSS</h3>
            </div>
            <div className="skills-box">
                <i className="devicon-php-plain"></i>
                <h3>PHP</h3>
            </div>
            <div className="skills-box">
                <i className="devicon-python-plain"></i>
                <h3>Python</h3>
            </div>
            <div className="skills-box">
                <i className="devicon-javascript-plain"></i>
                <h3>Javascript</h3>
            </div>
        </div>
    )
}

const Framework = () => {
    return (
        <div className="skills-box-section">
            <div className="skills-box">
                <i className="devicon-laravel-original"></i>
                <h3>Laravel</h3>
            </div>
            <div className="skills-box">
                <i className="devicon-react-original"></i>
                <h3>React</h3>
            </div>
        </div>
    )
}

function Skills() {
    const [activeComponent, setActiveComponent] = useState('Language');

    useEffect(() => {
        // ScrollReveal
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200,
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .skills-container, .project-box', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    }, []);

    // UseEffect kedua untuk memanggil ScrollReveal setiap kali activeComponent berubah
    useEffect(() => {
        ScrollReveal().reveal('.skills-box-section .skills-box', { origin: 'bottom' });
    }, [activeComponent]);

    return (
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span></h2>

            <div className="skills-container">
                <div className="skills-header">
                    <a
                        href="#!"
                        onClick={() => setActiveComponent('Language')}
                        className={activeComponent === 'Language' ? 'active' : ''}
                    >
                        Language
                    </a>
                    <a
                        href="#!"
                        onClick={() => setActiveComponent('Framework')}
                        className={activeComponent === 'Framework' ? 'active' : ''}
                    >
                        Framework/Library
                    </a>
                </div>

                {/* Render komponen berdasarkan state aktif */}
                {activeComponent === 'Language' && <Language />}
                {activeComponent === 'Framework' && <Framework />}
            </div>
        </section>
    );
}

export default Skills;
