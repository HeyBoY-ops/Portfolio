'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className={`${styles.footer} ${isVisible ? styles.visible : ''}`}
    >
      <div className={`container`}>
        <div className={styles.content}>
          <div className={`${styles.brandSection} ${isVisible ? styles.fadeIn : ''}`}>
            <div className={styles.brand}>Abhishek Sharma</div>
            <div className={styles.tagline}>Building digital experiences that matter.</div>
            <div className={styles.contactInfo}>
              <a href="mailto:abhishek9939606631@gmail.com" className={styles.contactLink}>
                abhishek9939606631@gmail.com
              </a>
            </div>
          </div>

          <div className={`${styles.socials} ${isVisible ? styles.fadeInDelay : ''}`}>
            <Link
              href="https://www.linkedin.com/in/abhishek-sharma-317a6b334/"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/HeyBoY-ops"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://leetcode.com/u/Avi_4423/"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leetcode
            </Link>
          </div>
        </div>

        <div className={`${styles.copyright} ${isVisible ? styles.fadeInDelay2 : ''}`}>
          © {new Date().getFullYear()} Abhishek Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
