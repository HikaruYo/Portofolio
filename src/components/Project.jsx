import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Pong1 from '../assets/Pong.png';
import Pong2 from '../assets/Pong2.png';
import Calender from '../assets/Calender.png';

function Project() {
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
        // project section design
        <section className="project" id="project">
            <h2 className="heading">Latest <span>Project</span></h2>

            <div className="project-container">
                <div className="project-box">
                    <img src={Pong1} alt="Pong Game" />
                    <div className="project-layer">
                        <h4>Pong Game</h4>
                        <a href="#"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="project-box">
                    <img src={Pong2} alt="Pong Game 2 Player" />
                    <div className="project-layer">
                        <h4>Pong 2 Player</h4>
                        <a href="#"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="project-box">
                    <img src={Calender} alt="Calendar App" />
                    <div className="project-layer">
                        <h4>Calendar</h4>
                        <a href="https://hikaru-calender.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <i className='bx bx-link-external'></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
