import { useViewport } from '@/contexts/ViewportContext';
import Face from './Face';
import styles from './Faces.module.scss';

function Faces() {
  const faces = [1, 2, 3, 4, 5];
  const viewport = useViewport();
  const isMobile = viewport.type === 'mobile';

  return (
    <div className={styles.faces}>
      {faces.map((num) => (
        <Face key={num} num={num} isMobile={isMobile} />
      ))}
    </div>
  );
}

export default Faces;
