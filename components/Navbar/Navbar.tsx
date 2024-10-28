// components/Navbar.tsx
'use client'
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
    >
      <div className="flex justify-center space-x-8">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className={`${styles.navLink} cursor-pointer`}
        >
          Sobre mí
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className={`${styles.navLink} cursor-pointer`}
        >
          Habilidades
        </ScrollLink>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          className={`${styles.navLink} cursor-pointer`}
        >
          Experiencia
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className={`${styles.navLink} cursor-pointer`}
        >
          Proyectos
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className={`${styles.navLink} cursor-pointer`}
        >
          Contacto
        </ScrollLink>
      </div>
    </motion.nav>
  );
};

export default Navbar;