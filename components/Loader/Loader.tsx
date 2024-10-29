'use client'
import { motion } from 'framer-motion';
import styles from './Loader.module.scss';

/**
 * Componente de cargador animado.
 * Utilizado para mostrar un indicador de carga en la aplicación.
 * @returns {JSX.Element} Cargador animado.
 */

export const Loader = () => {
  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.div>
  );
};