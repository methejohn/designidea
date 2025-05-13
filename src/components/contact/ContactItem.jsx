import styles from './ContactItem.module.scss';

function ContactItem({ title, children }) {
  return (
    <li className={styles.contactItem}>
      <span className={styles.title}>{title}</span>
      {children}
    </li>
  );
}

export default ContactItem;
