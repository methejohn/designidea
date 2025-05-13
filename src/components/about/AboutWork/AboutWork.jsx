import { useEffect, useRef } from 'react';
import { useViewport } from '@/contexts/ViewportContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Headline from './Headline';
import WorkList from './WorkList';
import styles from './AboutWork.module.scss';

gsap.registerPlugin(ScrollTrigger);

function AboutWork() {
  const groupWorkRef = useRef(null);
  const workListRef = useRef(null);
  const workItemRefs = useRef([]);

  const viewport = useViewport();
  const isMobile = viewport.type === 'mobile';

  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const teamTl = gsap.timeline({
        scrollTrigger: {
          trigger: groupWorkRef.current,
          start: '55% 50%',
          end: '+=2500',
          scrub: 1,
          pin: true,
        },
      });

      const setOpacity = (index, opacity, label) => {
        teamTl.to(
          workItemRefs.current[index],
          {
            duration: 1,
            '--team_opacity': `rgba(0,0,0,${opacity})`,
          },
          label
        );
      };

      const rotateTeam = (deg, label) => {
        teamTl.to(
          workListRef.current,
          {
            duration: 1,
            rotateY: deg,
          },
          label
        );
      };

      teamTl.set(workItemRefs.current[0], {
        '--team_opacity': 'rgba(0,0,0,0)',
      });

      rotateTeam(120, 'a');
      setOpacity(0, 0.4, 'a');
      setOpacity(2, 0, 'a');

      rotateTeam(240, 'b+=0.1');
      setOpacity(2, 0.4, 'b+=0.1');
      setOpacity(1, 0, 'b+=0.1');
    }, groupWorkRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div className={styles.groupWork} ref={groupWorkRef}>
      <Headline />
      <WorkList workListRef={workListRef} workItemRefs={workItemRefs} />
    </div>
  );
}

export default AboutWork;
