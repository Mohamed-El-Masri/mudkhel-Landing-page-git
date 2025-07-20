import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.png';

// Header specific styles
import '../styles/components/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detect if page is scrolled
      const isScrolled = currentScrollY > 50;
      setScrolled(isScrolled);
      
      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar ${scrolled ? 'scrolled' : ''} scroll-${scrollDirection}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
         <img src={Logo} alt="مُدخِل" className="brand-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" className="navbar-toggler" />
        
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto navbar-nav">
            <Nav.Link 
              href="#home" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              الرئيسية
            </Nav.Link>
            <Nav.Link 
              href="#about"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              عن الشركة
            </Nav.Link>
            <Nav.Link 
              href="#features"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              المميزات
            </Nav.Link>
            <Nav.Link 
              href="#solution"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('solution');
              }}
            >
              الحل
            </Nav.Link>
            <Nav.Link 
              href="#pricing"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('pricing');
              }}
            >
              الأسعار
            </Nav.Link>
            <Nav.Link 
              href="#contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              تواصل معنا
            </Nav.Link>
          </Nav>
          
          <div className="navbar-cta">
            <Button 
              variant="primary" 
              className="contact-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <span>
                <FontAwesomeIcon icon={faPhone} />
                اطلب الخدمة
              </span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
