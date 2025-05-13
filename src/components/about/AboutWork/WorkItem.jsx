import { forwardRef } from 'react';
import styles from './WorkItem.module.scss';

function WorkItem({ image, title, desc }, ref) {
  return (
    <li className={styles.workItem} ref={ref}>
      <img src={image} alt={title} loading="lazy" />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </li>
  );
}

export default forwardRef(WorkItem);
