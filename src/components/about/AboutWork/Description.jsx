import styles from './Description.module.scss';

function Description() {
  return (
    <div className={styles.description}>
      <p>
        We create purposeful designs that inspire and connect, bridging vision
        and reality with innovative solutions.
      </p>
      <p className={styles.kr}>
        우리는 제품, 경험, 미디어, 컨설팅에 이르기까지 영감을 주고 가치를
        제공하는 목적 중심의 디자인을 만듭니다. 디자인이데아는 혁신적인
        솔루션으로 비전과 현실을 연결합니다
      </p>
    </div>
  );
}

export default Description;
