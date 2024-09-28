import React from 'react'
import me from '../assets/me.jpg';

function About() {
    return (
        <section class="about" id="about">
            <div class="about-img">
                <img src={me} alt="" />
            </div>

            <div class="about-content">
                <h2 class="heading">About <span>Me</span></h2>
                <h3>BackEnd Developer!</h3>
                <p>My name is Adithya Prasetio Hutahaean, I was born in Semarang on January 29 2008. I am a BackEnd Developer and a Data Scientist. Currently I am studying at SMK Negeri 8 Semarang class 10 PPLG 1. My hobbies are watching anime, reading comics, and playing games. I also like workout and want to have an athletic body.</p>
            </div>
        </section>
    )
}

export default About