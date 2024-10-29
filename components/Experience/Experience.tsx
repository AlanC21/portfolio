// src/components/Experience.tsx
'use client'
import { motion } from 'framer-motion';
import styles from './Experience.module.scss'

/**
 * Lista de experiencias laborales o de proyectos.
 * Cada elemento describe una experiencia con detalles.
 * @type {Array<{ role: string, company: string, description: string, startDate: string, endDate?: string }>}
 */

const experiences = [
  { role: 'Desarrollador FullStack', company: 'FinGuru', year: '2024 - Present' },
];

/**
 * Componente de la sección "Experiencia".
 * Muestra una lista de experiencias laborales o de proyectos.
 * @returns {JSX.Element} Sección de experiencia.
 */

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experienceContainer}>
      <h2 className="text-3xl font-bold mb-8">Experiencia</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.experienceCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <span className="text-gray-500">{exp.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;