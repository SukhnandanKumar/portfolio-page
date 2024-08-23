import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import profiledp from "../photos/profiledpp.png";
import "../style/home.css"

import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const Homesection=()=>{

    // const [menuActive, setMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const typed = new Typed('.multiple-text', {
          strings: ['Frontend Developer', 'MERN Stack Developer'],
          typeSpeed: 70,
          backSpeed: 70,
          backDelay: 1000,
          loop: true,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);



      useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section');
          const navLinks = document.querySelectorAll('header nav a');
          const header = document.querySelector('header');
    
          sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height) {
              setActiveSection(id);
              navLinks.forEach((link) => {
                link.classList.remove('active');
                if (document.querySelector(`header nav a[href*=${id}]`)) {
                  document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                }
              });
            }
          });
    
          // Sticky navbar
          header.classList.toggle('sticky', window.scrollY > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // ScrollReveal initialization
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
        ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
        ScrollReveal().reveal('.home-contact p, .about-contact', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    //   const toggleMenu = () => {
    //     setMenuActive(!menuActive);
    //   };


    return(<> 
        <section id="home" className="home">
            <div className="home-content">
                <h3>Hi, Myself</h3>
                <h1>Sukhnandan Kumar</h1>
                <h3>And I'm a <span className='multiple-text'></span></h3>
                <p>I am proficient in both frontend and backend development, with expertise in React, JavaScript, MongoDB, Express, SQL, and Node.js. Additionally, I have strong skills in HTML, CSS, Tailwind, and Bootstrap for creating dynamic and responsive web applications. My focus is on building efficient and scalable solutions using the MERN stack.</p>
                <div className='social-media'>
                    <a href="https://www.linkedin.com/in/sukhnandan-kumar-905484276/"><LinkedInIcon/></a>
                    <a href="https://github.com/SukhnandanKumar"><GitHubIcon/></a>
                    <a href="#"><TwitterIcon/></a>
                    <a href="#"><InstagramIcon/></a>
                 </div>

                <a href="#" className='btn'>Resume <DownloadIcon/></a>

                <div className='home-img'>
                    <img src={profiledp} alt="img" />
                </div>
            </div>
        </section>
     </>)
}
export default Homesection;
 