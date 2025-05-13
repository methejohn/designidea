import { Link } from 'react-router-dom';
import WorkItem from './WorkItem';
import TabItem from './TabItem';
import styles from './WorkList.module.scss';

function WorkList({ items, name = '', showHeadline = true, showTabs = false }) {
  return (
    <div className={`${styles.groupWork} ${name}`}>
      {showTabs && (
        <ul className={styles.tabList}>
          <TabItem isActive>Product</TabItem>
          <TabItem>Visual</TabItem>
          <TabItem>Character</TabItem>
          <TabItem>Animation</TabItem>
        </ul>
      )}
      {showHeadline && (
        <div className={styles.headlineArea}>
          <strong className="headline">Work</strong>
          <Link to="/work" className={styles.linkMore}>
            more
          </Link>
        </div>
      )}
      <ul className={styles.workList}>
        {items.map((item, index) => (
          <WorkItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default WorkList;
