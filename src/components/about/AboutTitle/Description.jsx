import Faces from './Faces';
import styles from './Description.module.scss';
function Description() {
  return (
    <div className={styles.description}>
      <p>
        DESIGNIDEA, founded in November 2022, is a design studio dedicated to
        redefining design with innovative perspectives and unconventional
        approaches. Our goal is to enact positive change in people's lives
        through subtle yet impactful initiatives.
      </p>
      <p>
        To advocate the value of design, we assemble a team of seasoned
        professionals to offer unparalleled design experiences. At DESIGNIDEA,
        we are committed to relentless innovation and thoughtful consideration
        for a better world.
      </p>
      <Faces />
    </div>
  );
}

export default Description;
