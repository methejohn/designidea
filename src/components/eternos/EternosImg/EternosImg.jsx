import ImgItem from './ImgItem';
import styles from './EternosImg.module.scss';

function EternosImg() {
  const imgPaths = Array.from(
    { length: 11 },
    (_, i) => `/eternos${i + 1}.webp`
  );
  return (
    <div className={styles.groupBottom}>
      <ul>
        {imgPaths.map((src, index) => (
          <ImgItem key={index} src={src} alt="eternos-img" />
        ))}
      </ul>
    </div>
  );
}

export default EternosImg;
