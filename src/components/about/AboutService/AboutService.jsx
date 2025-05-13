import ServiceList from './ServiceList';
import styles from './AboutService.module.scss';

function AboutService() {
  return (
    <div className={styles.groupService}>
      <strong className="headline">Services</strong>
      <ServiceList />
    </div>
  );
}

export default AboutService;
