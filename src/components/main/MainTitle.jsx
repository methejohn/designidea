import styles from './MainTitle.module.scss';

function MainTitle() {
  return (
    <div className={styles.groupTitle}>
      <div className={styles.leftArea}>
        <strong className="headline">
          Breaking boundaries,
          <br />
          Creating value.
        </strong>
      </div>
      <div className={styles.rightArea}>
        <p className={styles.en}>
          Designidea pursues invisible values through constant questioning and
          an open mind, and will continue to shoot the ball to create sensitive
          designs
        </p>
        <p className={styles.kr}>
          DESIGNIDEA는 끊임없는 질문과 열린 마음을 통해 보이지 않는 가치를
          추구하며, 감도 높은 디자인을 창조하기 위해 계속해서 공을 쏘아 올릴
          것입니다.
        </p>
      </div>
    </div>
  );
}

export default MainTitle;
