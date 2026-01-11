'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Animated particles background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      if (canvas && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    let animationFrameId;

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section ref={heroRef} className={`container ${styles.hero} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gradientOrb} />
      <canvas ref={canvasRef} className={styles.particles} />

      <div className={styles.content}>
        <span className={`${styles.greeting} ${isVisible ? styles.fadeIn : ''}`}>
          Hello, I'm Abhishek Sharma
        </span>
        <h1 className={`${styles.title} ${isVisible ? styles.slideUp : ''}`}>
          Making <span className="text-gradient">Data</span> meaningful and <span className="text-gradient">Web</span> beautiful.
        </h1>
        <p className={`${styles.subtitle} ${isVisible ? styles.fadeInDelay : ''}`}>
          I am a Data Science Student & Full Stack Developer passionate about building robust applications and deriving insights from data.
        </p>

        <div className={`${styles.actions} ${isVisible ? styles.fadeInDelay2 : ''}`}>
          <Link
            href="#projects"
            className={styles.primaryBtn}
            onClick={(e) => handleClick(e, '#projects')}
          >
            View Work
            <span className={styles.btnArrow}>→</span>
          </Link>
          <Link
            href="#contact"
            className={styles.secondaryBtn}
            onClick={(e) => handleClick(e, '#contact')}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
