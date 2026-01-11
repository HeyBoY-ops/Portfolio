'use client';

import { useEffect, useRef, useState } from 'react';
import styles from "./About.module.css";

export default function About() {
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
      id="about"
      ref={sectionRef}
      className={`container section ${styles.about} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={`heading-md ${styles.heading} ${isVisible ? styles.fadeIn : ''}`}>
        Education & <span className="text-gradient">Background</span>
      </h2>

      <div className={styles.grid}>
        <div className={`${styles.bio} ${isVisible ? styles.slideInLeft : ''}`}>
          <p>
            I am currently pursuing a Bachelor of Technology (Data Science).
            My journey in technology is driven by a curiosity to understand data and a passion for building impactful applications.
          </p>
          <p>
            I specialize in full-stack development and data science, constantly learning new technologies to solve real-world problems.
          </p>
        </div>

        <div className={styles.education}>
          {/* Item 1 */}
          <div
            className={`${styles.eduCard} ${isVisible ? styles.slideInRight : ''}`}
            style={{ animationDelay: '0s' }}
          >
            <div className={styles.eduHeader}>
              <h3 className={styles.eduInstitution}>Newton School of Technology, Rishihood University</h3>
              <span className={styles.eduYear}>2024 - 2028</span>
            </div>
            <span className={styles.eduDegree}>Bachelor of Technology (Data Science)</span>
            <div className={styles.eduGrade}>Grade: 7.3/10.0</div>
          </div>

          {/* Item 2 */}
          <div
            className={`${styles.eduCard} ${isVisible ? styles.slideInRight : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className={styles.eduHeader}>
              <h3 className={styles.eduInstitution}>Presidency Global School</h3>
              <span className={styles.eduYear}>2023 - 2024</span>
            </div>
            <span className={styles.eduDegree}>Intermediate (Class XII)</span>
            <div className={styles.eduGrade}>Grade: 75.6%</div>
          </div>

          {/* Item 3 */}
          <div
            className={`${styles.eduCard} ${isVisible ? styles.slideInRight : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className={styles.eduHeader}>
              <h3 className={styles.eduInstitution}>St. Karen's Secondary School</h3>
              <span className={styles.eduYear}>2021 - 2022</span>
            </div>
            <span className={styles.eduDegree}>Matriculation (Class X)</span>
            <div className={styles.eduGrade}>Grade: 86.2%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
