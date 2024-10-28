// components/About.tsx
'use client'
import { motion } from 'framer-motion';
import styles from './About.module.scss'

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <motion.section
        id="about"
        className="animate-fade-in"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg text-gray-600">
          Soy un desarrollador Full Stack con experiencia en tecnologías como Next.js, React, Node.js, y más. Me apasiona crear aplicaciones web optimizadas y con un diseño atractivo.
        </p>
      </motion.section>
    </div>
  );
};

export default About;