'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useLoading } from '@/contexts/LoadingContext';
import { Github, ExternalLink, X } from 'lucide-react';
import styles from './Projects.module.scss';

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

const projects: Project[] = [
  {
    title: 'Mundialito',
    description: 'Fixture del Mundial de Futbol 2022',
    image: '/MundialitoImage.png',
    tags: ['React', 'NodeJS', 'JavaScript'],
    link: 'https://mundialito-alpha.vercel.app',
    github: 'https://github.com/SantinoCataldo/ProyectMundialito',
    features: [
      'Autenticación de usuarios',
      'API REST',
      'Base de datos MongoDB'
    ],
    technologies: [
      'React',
      'NodeJS',
      'JavaScript',
      'MongoDB',
      'Tailwind CSS'
    ]
  },
  {
    title: 'Todo List',
    description: 'Una Pagina web para crear y eliminar tareas',
    image: '/TodoListImage.png',
    tags: ['Node.js', 'JavaScript', 'NodeJS'],
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
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles.imageContainer}>
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
                  <span key={i} className={styles.tag}>{tag}</span>
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
                      <span key={index} className={styles.tag}>{tech}</span>
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