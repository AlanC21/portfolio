// SkillCard.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Skills.module.scss';

interface SkillCardProps {
  name: string;
  logo: string;
  link: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, logo, link, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.skillLink}
  >
    <motion.div
      className={styles.skillCard}
      style={{ backgroundColor: color }}
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
