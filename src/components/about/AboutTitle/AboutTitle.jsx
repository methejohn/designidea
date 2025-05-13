import Headline from './Headline';
import Description from './Description';
import LogoAni from '@/components/common/LogoAni';
import styles from './AboutTitle.module.scss';

function AboutTitle() {
  return (
    <div className={styles.groupAbout}>
      <Headline />
      <Description />
      <LogoAni />
    </div>
  );
}

export default AboutTitle;
