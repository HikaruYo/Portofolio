// Card Components
// import React from 'react'
import Pong1 from '../assets/Pong.png'
import Pong2 from '../assets/Pong2.png'
import Calender from '../assets/Calender.png';

function Project() {
    return (
        // project section design
        <section class="project" id="project">
            <h2 class="heading">Latest <span>Project</span></h2>

            <div class="project-container">
                <div class="project-box">
                    <img src={Pong1} alt="Pong Game" />
                    <div class="project-layer">
                        <h4>Pong Game</h4>
                        <a href="#"><i class='bx bx-link-external' ></i></a>
                    </div>
                </div>

                <div class="project-box">
                    <img src={Pong2} alt="Pong Game 2 Player" />
                    <div class="project-layer">
                        <h4>Pong 2 Player</h4>
                        <a href="#"><i class='bx bx-link-external' ></i></a>
                    </div>
                </div>

                <div class="project-box">
                    <img src={Calender} alt="Calender App" />
                    <div class="project-layer">
                        <h4>Calendar</h4>
                        <a href="https://hikaru-calender.vercel.app/" target="_blank"><i class='bx bx-link-external' ></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project