'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  github?: string;
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
    image: '/projects/MundialitoImage.png',
    tags: ['React', 'NodeJS', 'JavaScript', 'MongoDB', 'Tailwind CSS'],
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
    title: 'Tienda Digital',
    description: 'Tienda Digital de productos',
    image: '/projects/eCommerce.bmp',
    tags: ['NextJS', 'TypeScript', 'NodeJS', 'MongoDB', 'Tailwind CSS'],
    link: 'https://importaciones-oportunidades.netlify.app',
    features: [
      'Autenticación de usuarios',
      'API REST',
      'Base de datos MongoDB'
    ],
    technologies: [
      'NextJS',
      'TypeScript',
      'NodeJS',
      'MongoDB',
      'Tailwind CSS'
    ]
  },
  {
    title: 'Clon DisneyPlus',
    description: 'Clon de la plataforma de streaming Disney+',
    image: '/projects/DisneyPlus.bmp',
    tags: ['NextJS', 'JavaScript', 'NodeJS', 'MySQL', 'CSS'],
    link: 'https://disneyp.vercel.app',
    features: [
      'Autenticación de usuarios',
      'API REST',
      'Base de datos MongoDB'
    ],
    technologies: [
      'NextJS',
      'JavaScript',
      'NodeJS',
      'MySQL',
      'CSS'
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
  'MongoDB': 'rgba(66, 163, 64, 0.8)',
  'MySQL': 'rgba(0, 80, 140, 0.8)',
  'Git': 'rgba(240, 80, 51, 0.8)',
  'GitHub': 'rgba(36, 41, 46, 0.8)',
  'TailwindCSS': 'rgba(56, 189, 248, 0.8)',
  'TypeScript': 'rgba(40, 80, 122, 0.8)',
  'C++': 'rgba(50, 97, 138, 0.8)',
  'Java': 'rgba(190, 37, 46, 0.8)',
  'Python': 'rgba(40, 83, 120, 0.8)',
  'ExpressJS': 'rgba(55, 55, 55, 0.8)',
  'Supabase': 'rgba(20, 132, 121, 0.8)',
};

const tagColors: Record<string, string> = {
  'React': 'rgba(97, 218, 251, 0.8)',
  'NodeJS': 'rgba(104, 160, 99, 0.8)',
  'JavaScript': 'rgba(240, 219, 79, 0.8)',
  'MongoDB': 'rgba(66, 163, 64, 0.8)',
  'Tailwind CSS': 'rgba(56, 189, 248, 0.8)',
  'HTML': 'rgba(227, 76, 38, 0.8)',
  'CSS': 'rgba(38, 77, 228, 0.8)',
  'TypeScript': 'rgba(49, 120, 198, 0.8)',
  'C++': 'rgba(71, 128, 182, 0.8)',
  'Java': 'rgba(237, 44, 56, 0.8)',
  'Python': 'rgba(53, 114, 165, 0.8)',
  'NextJS': 'rgba(23, 23, 23, 0.8)',
  'ExpressJS': 'rgba(96, 96, 96, 0.8)',
  'MySQL': 'rgba(0, 80, 140, 0.8)',
  'Supabase': 'rgba(36, 198, 183, 0.8)',
  'Git': 'rgba(240, 80, 51, 0.8)',
  'GitHub': 'rgba(36, 41, 46, 0.8)',
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
  'Git': 'https://git-scm.com/',
  'GitHub': 'https://github.com/',
  'TailwindCSS': 'https://tailwindcss.com/',
  'TypeScript': 'https://www.typescriptlang.org/',
  'C++': 'https://en.cppreference.com/w/',
  'Java': 'https://www.oracle.com/java/',
  'Python': 'https://www.python.org/',
  'ExpressJS': 'https://expressjs.com/',
  'Supabase': 'https://supabase.com/',
};

/**
 * Componente de visualización de proyectos.
 * Muestra una galería de proyectos destacados con detalles.
 * @returns {JSX.Element} La sección de proyectos.
 */

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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

  const handleImageLoad = () => {
    if (typeof setIsLoading === 'function') {
      setIsLoading(false);
    }
  }

  const handleImageError = () => {
    if (typeof setIsLoading === 'function') {
      setIsLoading(false);
    }
  }

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
            key={project.title}
            className={styles.projectCard}
            variants={item}
          >
            <div className={styles.imageContainer} onClick={() => setSelectedProject(project)}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                onLoad={() => handleImageLoad}
                onError={() => handleImageError}
                priority={index < 2}
              />
              <div className={styles.projectOverlay}>
                <span className={styles.viewProject}>Ver proyecto</span>
              </div>
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <a
                    key={`${project.title}-${tag}`}
                    className={styles.tag}
                    href={tagLinks[tag]}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      border: `3px solid ${tagBorderColors[tag] || 'rgba(0, 0, 0, 0.4)'}`,
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

      {isMounted && (
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
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.secondary}`}
                      >
                        <Github size={20} />
                        Ver código
                      </a>)
                    }
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
};

export default Projects;