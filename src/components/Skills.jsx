import React from 'react'

function Skills() {
    return (
        <section class="skills" id="skills">
            <h2 class="heading">My <span>Skills</span></h2>

            <div class="skills-container">
                <div class="skills-box">
                    <i class='bx bx-code'></i>
                    <h3>FrontEnd</h3>
                    <p>HTML, CSS, JavaScript</p>
                </div>

                <div class="skills-box">
                    <i class='bx bx-minus-back'></i>
                    <h3>BackEnd</h3>
                    <p>Python, PHP, MySql</p>
                </div>
            </div>
        </section>
    )
}

export default Skills