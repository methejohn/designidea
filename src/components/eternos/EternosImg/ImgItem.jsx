import styles from './ImgItem.module.scss';

function ImgItem({ src, alt }) {
  return (
    <li className={styles.imgItem}>
      <img src={src} alt={alt} loading="lazy" />
    </li>
  );
}

export default ImgItem;
