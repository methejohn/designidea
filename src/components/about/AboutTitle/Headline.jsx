import styles from './Headline.module.scss';

function Headline() {
  return (
    <strong className={styles.headline}>
      <span>DesignIdea Launches Little Balls&nbsp;</span>
      <span className={styles.animation}>
        DesignIdea Launches Little Balls&nbsp;
      </span>
    </strong>
  );
}

export default Headline;
