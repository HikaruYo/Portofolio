import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-iconTop">
                <a href="#home"><i class='bx bx-chevron-up'></i></a>
            </div>
            <div className='text'>
                <p>{new Date().getFullYear()} Hikaru's Domain. Created using React</p>
            </div>
        </footer>
    )
}

export default Footer