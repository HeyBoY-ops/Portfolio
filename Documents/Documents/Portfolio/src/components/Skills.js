'use client';

import { useEffect, useRef, useState } from 'react';
import styles from "./Skills.module.css";

export default function Skills() {
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

  const categories = [
    { title: 'Languages', skills: ["JavaScript", "CSS", "HTML", "Python"] },
    { title: 'Frameworks & Libraries', skills: ["Node.js", "Express.js", "React", "Next.js", "React Native", "Tailwind CSS"] },
    { title: 'Tools & Platforms', skills: ["MySQL", "Prisma ORM", "Figma", "Pandas", "Firebase", "Git", "Github"] },
    { title: 'Soft Skills', skills: ["Teamwork", "Leadership", "Problem-Solving"] },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`container section ${styles.skills} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={`heading-md ${styles.heading} ${isVisible ? styles.fadeIn : ''}`}>
        Technical <span className="text-gradient">Skills</span>
      </h2>

      <div className={styles.grid}>
        {categories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`${styles.category} ${isVisible ? styles.categoryAnimation : ''}`}
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.list}>
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`${styles.skill} ${isVisible ? styles.skillAnimation : ''}`}
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (idx * 0.03)}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
