'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import styles from "./Projects.module.css";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section
      id="projects"
      ref={sectionRef}
      className={`container section ${styles.projects} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={`heading-md ${styles.heading} ${isVisible ? styles.fadeIn : ''}`}>
        Featured <span className="text-gradient">Projects</span>
      </h2>

      <div className={styles.grid}>
        {/* Project 1: Movie Ticket Booking */}
        <div
          className={`${styles.card} ${isVisible ? styles.cardAnimation : ''}`}
          style={{ animationDelay: '0s' }}
        >
          <div className={styles.cardGlow}></div>
          <div className={styles.header}>
            <span className={styles.date}>November 2025</span>
            <h3 className={styles.title}>Movie-Ticket-Booking</h3>
          </div>

          <p className={styles.desc}>
            Built a robust RESTful API backend for a movie ticket booking platform with secure user authentication and real-time seat availability tracking. Please start the backend first the click demo link.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>Node.js</span>
            <span className={styles.tag}>Express.js</span>
            <span className={styles.tag}>Prisma</span>
            <span className={styles.tag}>MongoDB</span>
            <span className={styles.tag}>JWT</span>
            <span className={styles.tag}>bcryptjs</span>
            <span className={styles.tag}>dotenv</span>
          </div>

          <div className={styles.links}>
            <Link
              href="https://github.com/HeyBoY-ops/movie-ticket-backend.git"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
            <Link
              href="https://movie-ticket-backend-d25t.onrender.com/"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>Backend</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
            <Link
              href="https://movie-ticket-app-drab.vercel.app/"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>Frontend</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
          </div>
        </div>

        {/* Project 2: Budget Planner */}
        <div
          className={`${styles.card} ${isVisible ? styles.cardAnimation : ''}`}
          style={{ animationDelay: '0.15s' }}
        >
          <div className={styles.cardGlow}></div>
          <div className={styles.header}>
            <span className={styles.date}>May 2025</span>
            <h3 className={styles.title}>Budget Planner</h3>
          </div>

          <p className={styles.desc}>
            A modern budgeting web app that helps users manage expenses, monitor spending, and analyze trends through intuitive dashboards.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>React.js</span>
            <span className={styles.tag}>Node.js</span>
            <span className={styles.tag}>Express.js</span>
            <span className={styles.tag}>Firebase</span>
            <span className={styles.tag}>Chart.js</span>
          </div>

          <div className={styles.links}>
            <Link
              href="#"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
            <Link
              href="#"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>Live Demo</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
          </div>
        </div>

        {/* Project 3: Tic-Tac-Toe */}
        <div
          className={`${styles.card} ${isVisible ? styles.cardAnimation : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className={styles.cardGlow}></div>
          <div className={styles.header}>
            <span className={styles.date}>May 2025</span>
            <h3 className={styles.title}>Tic-Tac-Toe</h3>
          </div>

          <p className={styles.desc}>
            A browser-based 3x3 Tic Tac Toe game where two players alternate turns placing X or O.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>HTML</span>
            <span className={styles.tag}>CSS</span>
            <span className={styles.tag}>JavaScript</span>
          </div>

          <div className={styles.links}>
            <Link
              href="#"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
            <Link
              href="#"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>Live Demo</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
          </div>
        </div>
        {/* Project 4: IELTS INSTITUTE */}
        <div
          className={`${styles.card} ${isVisible ? styles.cardAnimation : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className={styles.cardGlow}></div>
          <div className={styles.header}>
            <span className={styles.date}>Sep 2025</span>
            <h3 className={styles.title}>IELTS Institute</h3>
          </div>

          <p className={styles.desc}>
            A landing page for Ielts Institute.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>HTML</span>
            <span className={styles.tag}>CSS</span>
            <span className={styles.tag}>JavaScript</span>
          </div>

          <div className={styles.links}>
            <Link
              href="https://github.com/HeyBoY-ops/IELTS_Institute.git"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
            <Link
              href="https://ielts-institute-ebon.vercel.app/"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              <span>Live Demo</span>
              <span className={styles.linkIcon}>↗</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
