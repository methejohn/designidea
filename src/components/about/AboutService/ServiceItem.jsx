import styles from './ServiceItem.module.scss';

function ServiceItem({ title, items }) {
  return (
    <li className={styles.serviceItem}>
      <strong className={styles.title}>{title}</strong>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="sub-item">
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default ServiceItem;
