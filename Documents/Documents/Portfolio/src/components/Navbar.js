'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={(e) => handleNavClick(e, '/')}>
          Abhishek<span className={styles.logoSpan}></span>
        </Link>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}>
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
            <span className={isMobileMenuOpen ? styles.open : ''}></span>
          </span>
        </button>

        <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link
            href="#about"
            className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`}
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </Link>
          <Link
            href="#projects"
            className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className={`${styles.link} ${activeSection === 'skills' ? styles.active : ''}`}
            onClick={(e) => handleNavClick(e, '#skills')}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className={`${styles.link} ${activeSection === 'contact' ? styles.active : ''}`}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=18ACbm1RiobpcnZRsHloO0Dl8drKb4kh2"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resume
          </a>
        </div>
        <Link
          href="#contact"
          className={styles.cta}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Let's Talk
        </Link>
      </div>
    </nav>
  );
}
