import styles from './CategoryItem.module.scss';

function CategoryItem({ title, content }) {
  return (
    <li className={styles.categoryItem}>
      <p className={styles.title}>{title}</p>
      <div>
        <p className={styles.content}>{content}</p>
      </div>
    </li>
  );
}

export default CategoryItem;
