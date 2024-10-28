'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.scss';

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
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-72 h-72 lg:w-96 lg:h-96 mb-6 lg:mb-0"
          >
            <Image
              src="/MeImage.jpeg"
              alt="Foto de Alan Cordoba"
              fill
              className="rounded-2xl shadow-xl object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
              priority
            />
          </motion.div>

          <div className="max-w-2xl lg:ml-8">
            <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Soy un desarrollador Full Stack con experiencia en tecnologías como Next.js, React, Node.js, y más. Me apasiona crear aplicaciones web optimizadas y con un diseño atractivo.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Con más de 2 años de experiencia en el desarrollo web, he trabajado en diversos proyectos que van desde aplicaciones empresariales hasta startups innovadoras. Me especializo en crear experiencias de usuario excepcionales y mantener altos estándares de calidad en el código.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
