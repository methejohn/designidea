import { useState } from 'react';
import { useViewport } from '@/contexts/ViewportContext';
import { Link } from 'react-router-dom';
import styles from './WorkItem.module.scss';

function WorkItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const viewport = useViewport();
  const isMobile = viewport.type === 'mobile';

  return (
    <li
      className={`${styles.workItem} ${isHovered ? styles.active : ''}`}
      onMouseEnter={!isMobile ? () => setIsHovered(true) : null}
      onMouseLeave={!isMobile ? () => setIsHovered(false) : null}
    >
      <Link to="/work/eternos">
        <div>
          <img src={item.image} alt={item.title} loading="lazy" />
        </div>
        <p>{item.title}</p>
      </Link>
    </li>
  );
}

export default WorkItem;
