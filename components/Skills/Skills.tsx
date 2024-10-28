// components/Skills.tsx
'use client'
import { motion } from 'framer-motion';
import styles from './Skilss.module.scss'

const skills = ['JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript'];

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillCard}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;