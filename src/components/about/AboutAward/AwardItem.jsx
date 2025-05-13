import styles from './AwardItem.module.scss';

function AwardItem({ award }) {
  return <li className={styles.awardItem}>{award}</li>;
}

export default AwardItem;
