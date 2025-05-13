import { forwardRef } from 'react';
import { useViewport } from '@/contexts/ViewportContext';
import styles from './MainVid.module.scss';
function MainVid(props, ref) {
  const viewport = useViewport();
  const isMobile = viewport.type === 'mobile';

  return (
    <div className={styles.groupMain} ref={ref}>
      <div className={styles.mainVid}>
        <video
          key={isMobile ? 'mobile' : 'desktop'}
          autoPlay
          muted
          loop
          playsInline
          title="메인 영상"
        >
          <source
            src={
              isMobile ? '/videos/main-vid_mobile.mp4' : '/videos/main-vid.mp4'
            }
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default forwardRef(MainVid);
