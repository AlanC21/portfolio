import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Skills.module.scss';

/**
 * Interface para una tarjeta de habilidad.
 * Describe una habilidad específica que será mostrada en la sección de habilidades.
 * @interface
 */

interface SkillCardProps {
  name: string;
  logo: string;
  link: string;
  color: string;
  borderColor: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, logo, link, color, borderColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.skillLink}
  >
    <motion.div
      className={styles.skillCard}
      style={{ border: '1px solid', borderColor, backgroundColor: color }}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={50}
        height={50}
        className={styles.skillLogo}
      />
      <span className={styles.skillName}>{name}</span>
    </motion.div>
  </a>
);

export default SkillCard;
