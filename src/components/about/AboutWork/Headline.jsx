import Description from './Description';
import styles from './Headline.module.scss';

function Headline() {
  return (
    <div className={styles.headlineArea}>
      <strong className="headline">How We Work</strong>
      <Description />
    </div>
  );
}

export default Headline;
