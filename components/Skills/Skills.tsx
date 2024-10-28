// components/Skills.tsx
'use client'
import { motion } from 'framer-motion';
import styles from './Skilss.module.scss'

const skills = [
  { name: 'HTML/CSS', color: 'rgba(38, 77, 228, 0.8)' },     // #264DE4
  { name: 'JavaScript', color: 'rgba(240, 219, 79, 0.8)' },   // #F0DB4F
  { name: 'React', color: 'rgba(97, 218, 251, 0.8)' },        // #61DAFB
  { name: 'Next.js', color: 'rgba(0, 0, 0, 0.8)' },           // #000000
  { name: 'Node.js', color: 'rgba(104, 160, 99, 0.8)' },      // #68A063
  { name: 'MongoDB', color: 'rgba(71, 162, 72, 0.8)' },       // #47A248
  { name: 'MySQL', color: 'rgba(68, 121, 161, 0.8)' },        // #4479A1
  { name: 'Nest', color: 'rgba(224, 35, 78, 0.8)' },          // #E0234E
  { name: 'Git', color: 'rgba(241, 80, 47, 0.8)' },           // #F1502F
  { name: 'GitHub', color: 'rgba(24, 23, 23, 0.8)' },         // #181717
  { name: 'Docker', color: 'rgba(36, 150, 237, 0.8)' }        // #2496ED
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2 className="text-3xl font-bold mb-8">Tecnologías</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillCard}
            style={{ backgroundColor: skill.color }}
            whileHover={{ scale: 1.1 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;