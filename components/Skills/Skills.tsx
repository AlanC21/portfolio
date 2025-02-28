'use client'
import SkillCard from './SkillCard';
import styles from './Skills.module.scss';

/**
 * Lista de habilidades técnicas.
 * Cada habilidad incluye un nombre, ícono y nivel de competencia.
 * @type {Array<SkillCard>}
 */

const skills = [
  { name: 'HTML', logo: '/logos/html5.svg', link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', color: 'rgba(227, 76, 38, 0.2)', borderColor: 'rgba(227, 76, 38, 1)' },
  { name: 'CSS', logo: '/logos/css.svg', link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS', color: 'rgba(38, 77, 228, 0.2)', borderColor: 'rgba(38, 77, 228, 1)' },
  { name: 'JavaScript', logo: '/logos/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', color: 'rgba(240, 219, 79, 0.2)', borderColor: 'rgba(240, 219, 79, 1)' },
  { name: 'TypeScript', logo: '/logos/typescript.svg', link: 'https://www.typescriptlang.org/', color: 'rgba(49, 120, 198, 0.2)', borderColor: 'rgba(49, 120, 198, 1)' },
  { name: 'C++', logo: '/logos/cpp.svg', link: 'https://www.cplusplus.com/', color: 'rgba(71, 128, 182, 0.2)', borderColor: 'rgba(71, 128, 182, 1)' },
  { name: 'Java', logo: '/logos/java.svg', link: 'https://www.java.com/', color: 'rgba(237, 44, 56, 0.2)', borderColor: 'rgba(237, 44, 56, 1)' },
  { name: 'Python', logo: '/logos/python.svg', link: 'https://www.python.org/', color: 'rgba(53, 114, 165, 0.2)', borderColor: 'rgba(53, 114, 165, 1)' },
  { name: 'Node.js', logo: '/logos/nodejs.svg', link: 'https://nodejs.org/', color: 'rgba(75, 155, 55, 0.2)', borderColor: 'rgba(75, 155, 55, 1)' },
  { name: 'React.js', logo: '/logos/react.svg', link: 'https://react.dev/', color: 'rgba(97, 218, 251, 0.2)', borderColor: 'rgba(97, 218, 251, 1)' },
  { name: 'Next.js', logo: '/logos/nextjs_icon_dark.svg', link: 'https://nextjs.org/', color: 'rgba(23, 23, 23, 0.2)', borderColor: 'rgba(23, 23, 23, 1)' },
  { name: 'Express.js', logo: '/logos/expressjs.svg', link: 'https://expressjs.com/', color: 'rgba(96, 96, 96, 0.2)', borderColor: 'rgba(96, 96, 96, 1)' },
  { name: 'MySQL', logo: '/logos/mysql.svg', link: 'https://www.mysql.com/', color: 'rgba(0, 80, 140, 0.2)', borderColor: 'rgba(0, 80, 140, 1)' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg', link: 'https://www.mongodb.com/', color: 'rgba(66, 163, 64, 0.2)', borderColor: 'rgba(66, 163, 64, 1)' },
  { name: 'Supabase', logo: '/logos/supabase.svg', link: 'https://supabase.io/', color: 'rgba(36, 198, 183, 0.2)', borderColor: 'rgba(36, 198, 183, 1)' },
  { name: 'Git', logo: '/logos/git.svg', link: 'https://git-scm.com/', color: 'rgba(240, 80, 51, 0.2)', borderColor: 'rgba(240, 80, 51, 1)' },
  { name: 'GitHub', logo: '/logos/github-dark.svg', link: 'https://github.com/', color: 'rgba(36, 41, 46, 0.2)', borderColor: 'rgba(36, 41, 46, 1)' },
  { name: 'TailwindCSS', logo: '/logos/tailwindcss.svg', link: 'https://tailwindcss.com/', color: 'rgba(56, 189, 248, 0.2)', borderColor: 'rgba(56, 189, 248, 1)' }
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
