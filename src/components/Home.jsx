import React from 'react'
import Violet from '../assets/Violet2.jpg'

function Home() {
    return (
        <section class="home" id="home">
            <div class="home-content">
                <h3>Hello, I'am</h3>
                <h1>Adithya Prasetio Hutahaean</h1>
                <h3>And I'm a <span class="multiple-text"></span></h3>
                <p></p>
                <div class="social-media">
                    <a href="https://github.com/HikaruYo"><i class='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/adithaean/"><i class='bx bxl-instagram-alt'></i></a>
                </div>
            </div>

            <div class="home-img">
                <img src={Violet} alt="" />
            </div>
        </section>
    )
}

export default Home