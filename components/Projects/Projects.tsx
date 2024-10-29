'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useLoading } from '@/contexts/LoadingContext';
import { Github, ExternalLink, X } from 'lucide-react';
import styles from './Projects.module.scss';

/**
 * Interface que representa un proyecto.
 * @interface
 */

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  features: string[];
  technologies: string[];
}

/**
 * Lista de proyectos destacados.
 * Cada proyecto incluye un título, descripción, imagen, etiquetas, enlaces, y tecnologías utilizadas.
 * @type {Array<Project>}
 */

const projects: Project[] = [
  {
    title: 'Mundialito',
    description: 'Fixture del Mundial de Futbol 2022',
    image: '/MundialitoImage.png',
    tags: ['React', 'Node.js', 'JavaScript'],
    link: 'https://mundialito-alpha.vercel.app',
    github: 'https://github.com/SantinoCataldo/ProyectMundialito',
    features: [
      'Autenticación de usuarios',
      'API REST',
      'Base de datos MongoDB'
    ],
    technologies: [
      'React',
      'Node.js',
      'JavaScript',
      'MongoDB',
      'TailwindCSS'
    ]
  },
  {
    title: 'Todo List',
    description: 'Una Pagina web para crear y eliminar tareas',
    image: '/TodoListImage.png',
    tags: ['Node.js', 'JavaScript', 'HTML'],
    link: 'https://todo-list-seven-henna-45.vercel.app',
    github: 'https://github.com/AlanC21/todo-list',
    features: [
      'Sistema de tareas',
      'Dashboard de creacion de Tareas',
    ],
    technologies: [
      'Node.js',
      'JavaScript',
      'HTML',
      'CSS',
    ]
  },
];


const tagBorderColors: Record<string, string> = {
  'HTML': 'rgba(227, 76, 38, 0.8)',
  'CSS': 'rgba(38, 77, 228, 0.8)',
  'JavaScript': 'rgba(240, 219, 79, 0.8)',
  'React': 'rgba(97, 218, 251, 0.8)',
  'Next.js': 'rgba(23, 23, 23, 0.8)',
  'Node.js': 'rgba(75, 155, 55, 0.8)',
  'MongoDB': 'rgba(87, 171, 47, 0.8)',
  'MySQL': 'rgba(0, 80, 140, 0.8)',
  'NestJS': 'rgba(237, 46, 100, 0.8)',
  'Git': 'rgba(240, 80, 51, 0.8)',
  'GitHub': 'rgba(36, 41, 46, 0.8)',
  'Docker': 'rgba(0, 123, 207, 0.8)',
  'TailwindCSS': 'rgba(56, 189, 248, 0.8)'
};

const tagColors: Record<string, string> = {
  'HTML': 'rgba(227, 76, 38, 0.2)',
  'CSS': 'rgba(38, 77, 228, 0.2)',
  'JavaScript': 'rgba(240, 219, 79, 0.2)',
  'React': 'rgba(97, 218, 251, 0.2)',
  'Next.js': 'rgba(23, 23, 23, 0.2)',
  'Node.js': 'rgba(75, 155, 55, 0.2)',
  'MongoDB': 'rgba(87, 171, 47, 0.2)',
  'MySQL': 'rgba(0, 80, 140, 0.2)',
  'NestJS': 'rgba(237, 46, 100, 0.2)',
  'Git': 'rgba(240, 80, 51, 0.2)',
  'GitHub': 'rgba(36, 41, 46, 0.2)',
  'Docker': 'rgba(0, 123, 207, 0.2)',
  'TailwindCSS': 'rgba(56, 189, 248, 0.2)'
};

const tagLinks: Record<string, string> = {
  'HTML': 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
  'CSS': 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'React': 'https://react.dev/',
  'Next.js': 'https://nextjs.org/',
  'Node.js': 'https://nodejs.org/',
  'MongoDB': 'https://www.mongodb.com/',
  'MySQL': 'https://www.mysql.com/',
  'NestJS': 'https://nestjs.com/',
  'Git': 'https://git-scm.com/',
  'GitHub': 'https://github.com/',
  'Docker': 'https://www.docker.com/',
  'TailwindCSS': 'https://tailwindcss.com/',
};

/**
 * Componente de visualización de proyectos.
 * Muestra una galería de proyectos destacados con detalles.
 * @returns {JSX.Element} La sección de proyectos.
 */

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { setIsLoading } = useLoading();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <h2>Proyectos</h2>
        <p>Una selección de mis proyectos más recientes y destacados</p>
      </div>

      <motion.div
        className={styles.projectsGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            variants={item}
          >
            <div className={styles.imageContainer} onClick={() => setSelectedProject(project)}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                onLoadingComplete={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
              <div className={styles.projectOverlay}>
                <span className={styles.viewProject}>Ver proyecto</span>
              </div>
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <a
                    key={i}
                    className={styles.tag}
                    href={tagLinks[tag]}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      border: `3px solid ${tagBorderColors[tag] || 'rgba(0, 0, 0, 0.8)'}`,
                      backgroundColor: tagColors[tag] || 'rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>

              <div className={styles.modalHeader}>
                <h3>{selectedProject.title}</h3>
              </div>

              <div className={styles.modalBody}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="rounded-lg"
                />

                <p>{selectedProject.longDescription}</p>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Características principales</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Tecnologías utilizadas</h4>
                  <div className={styles.tags}>
                    {selectedProject.technologies.map((tech, index) => (
                      <a key={index} className={styles.tag} href={tagLinks[tech]} target='_blank' rel='noopener noreferrer' style={{
                        border: `3px solid ${tagBorderColors[tech] || 'rgba(0, 0, 0, 0.2)'}`,
                        backgroundColor: tagColors[tech] || 'rgba(0, 0, 0, 0.2)',
                      }}>{tech}</a>
                    ))}
                  </div>
                </div>

                <div className={styles.links}>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.primary}`}
                  >
                    <ExternalLink size={20} />
                    Ver proyecto
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.secondary}`}
                  >
                    <Github size={20} />
                    Ver código
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;