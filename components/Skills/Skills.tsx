'use client'
import SkillCard from './SkillCard';
import styles from './Skills.module.scss';

/**
 * Lista de habilidades técnicas.
 * Cada habilidad incluye un nombre, ícono y nivel de competencia.
 * @type {Array<SkillCard>}
 */

const skills = [
  { name: 'HTML', logo: '/logos/html5.svg', link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', borderColor: 'rgba(227, 76, 38, 0.8)', color: 'rgba(227, 76, 38, 0.2)' },
  { name: 'CSS', logo: '/logos/css.svg', link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS', borderColor: 'rgba(38, 77, 228, 0.8)', color: 'rgba(38, 77, 228, 0.2)' },
  { name: 'JavaScript', logo: '/logos/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', borderColor: 'rgba(240, 219, 79, 0.8)', color: 'rgba(240, 219, 79, 0.2)' },
  { name: 'React', logo: '/logos/react.svg', link: 'https://react.dev/', borderColor: 'rgba(97, 218, 251, 0.8)', color: 'rgba(97, 218, 251, 0.2)' },
  { name: 'Next.js', logo: '/logos/nextjs_icon_dark.svg', link: 'https://nextjs.org/', borderColor: 'rgba(23, 23, 23, 0.8)', color: 'rgba(23, 23, 23, 0.2)' },
  { name: 'Node.js', logo: '/logos/nodejs.svg', link: 'https://nodejs.org/', borderColor: 'rgba(75, 155, 55, 0.8)', color: 'rgba(75, 155, 55, 0.2)' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg', link: 'https://www.mongodb.com/', borderColor: 'rgba(87, 171, 47, 0.8)', color: 'rgba(87, 171, 47, 0.2)' },
  { name: 'MySQL', logo: '/logos/mysql.svg', link: 'https://www.mysql.com/', borderColor: 'rgba(0, 80, 140, 0.8)', color: 'rgba(0, 80, 140, 0.2)' },
  { name: 'NestJS', logo: '/logos/nestjs.svg', link: 'https://nestjs.com/', borderColor: 'rgba(237, 46, 100, 0.8)', color: 'rgba(237, 46, 100, 0.2)' },
  { name: 'Git', logo: '/logos/git.svg', link: 'https://git-scm.com/', borderColor: 'rgba(240, 80, 51, 0.8)', color: 'rgba(240, 80, 51, 0.2)' },
  { name: 'GitHub', logo: '/logos/github-dark.svg', link: 'https://github.com/', borderColor: 'rgba(36, 41, 46, 0.8)', color: 'rgba(36, 41, 46, 0.2)' },
  { name: 'Docker', logo: '/logos/docker.svg', link: 'https://www.docker.com/', borderColor: 'rgba(0, 123, 207, 0.8)', color: 'rgba(0, 123, 207, 0.2)' },
  { name: 'TailwindCSS', logo: '/logos/tailwindcss.svg', link: 'https://tailwindcss.com/', borderColor: 'rgba(56, 189, 248, 0.8)', color: 'rgba(56, 189, 248, 0.2)' }
];

/**
 * Componente de la sección "Tecnologias".
 * Muestra una lista de habilidades y tecnologías dominadas.
 * @returns {JSX.Element} Sección de Tecnologias.
 */

const Skills: React.FC = () => (
  <section id="skills" className={styles.skillsContainer}>
    <h2 className="text-3xl font-bold mb-8">Tecnologías</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <SkillCard key={index} name={skill.name} color={skill.color} borderColor={skill.borderColor} logo={skill.logo} link={skill.link} />
      ))}
    </div>
  </section>
);

export default Skills;
