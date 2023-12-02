import { Link } from 'react-router-dom';
import './NavCss.css'
import { useEffect } from 'react';
import { useState } from 'react';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
    
        const toggleNav = () => {
          //Animate Links
          navLinks.classList.toggle("open");
          links.forEach(link => {
            link.classList.toggle("fade");
          });
    
          //Hamburger Animation
          hamburger.classList.toggle("toggle");
          setIsOpen(!isOpen);
        };
    
        hamburger.addEventListener('click', toggleNav);
    
        return () => {
          hamburger.removeEventListener('click', toggleNav);
        };
      }, [isOpen]);

    return (
        <nav className='bg-gray-900'>
        <div className="flex items-center">
        <img className='w-[120px]' src="./icons/logo-svg.png" alt="" />
        </div>
        <div className="hamburger">
        <div className={`line1 ${isOpen ? 'line1-open' : ''}`}></div>
        <div className={`line2 ${isOpen ? 'line2-open' : ''}`}></div>
        <div className={`line3 ${isOpen ? 'line3-open' : ''}`}></div>
      </div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ordertracking">Order Tracking</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="">Services</Link></li>
            <li><button title="Create Order">Create Order</button></li>
            {/* <li><button className="login-button" href="#">Login</button></li>
            <li><button className="join-button" href="#">Join</button></li> */}
        </ul>
    </nav>
    );
};

export default NavigationBar;