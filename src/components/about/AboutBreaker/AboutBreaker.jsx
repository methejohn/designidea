import { useRef } from 'react';
import Brick from './Brick';
import useBrickBreaker from '@/hooks/useBrickBreaker';
import styles from './AboutBreaker.module.scss';

const bricks = [
  { image: '/brick1.png', text: "Design doesn't\nneed logic.", name: 'c b y' },
  { image: '/brick2.png' },
  { image: '/brick3.png', text: 'Design is\neasy.' },
  { image: '/brick4.png', text: 'Design labor\nis cheap.', name: 'b p' },
  { image: '/brick5.png', text: 'Design is\nmerely decoration.', name: 'b g' },
  { image: '/brick6.png', text: "Design isn't\nimportant\nto everyone." },
  { image: '/brick7.png' },
  {
    image: '/brick8.png',
    text: 'Design refers to the\nshape of the product.',
    name: 's',
  },
  { image: '/brick9.png' },
  { image: '/brick10.png', text: 'Design must be\npretty.' },
];

function AboutBreaker() {
  const groupRef = useRef(null);
  const paddleRef = useRef(null);
  const ballRef = useRef(null);
  const brickRefs = useRef([]);

  const { handleClick } = useBrickBreaker({
    groupRef,
    paddleRef,
    ballRef,
    brickRefs,
  });

  return (
    <div className={styles.groupBreaker} ref={groupRef}>
      <div className={styles.brickArea}>
        {bricks.map((brick, index) => (
          <Brick
            key={index}
            image={brick.image}
            text={brick.text}
            name={brick.name}
            ref={(el) => (brickRefs.current[index] = el)}
          />
        ))}
      </div>
      <div className={styles.paddle} ref={paddleRef} onClick={handleClick}>
        <span>PLAY</span>
      </div>
      <div className={styles.ball} ref={ballRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.44 151.49">
          <g>
            <path
              d="M.06,50.29V.69h16.03c14.49,0,23.02,9.28,23.02,24.73s-8.53,24.87-23.64,24.87H.06ZM15.06,44.81c12.16,0,18.02-7.36,18.02-19.39S27.23,6.17,15.68,6.17H6.23v38.64h8.84Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <path
              d="M48.68.69h30.08v5.48h-23.91v16.58h22.33v5.41h-22.33v16.65h24.25v5.48h-30.42V.69Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <path
              d="M105.1,5.48c-6.58,0-10.86,3.43-10.89,8.15.03,5.21,5.82,7.16,9.59,8.08l4.93,1.37c5.31,1.37,14.04,4.42,14.04,13.7,0,8.08-6.51,14.35-18.02,14.39-10.69-.03-17.3-5.55-17.88-13.77h6.3c.51,5.55,5.69,8.19,11.58,8.15,6.85.03,11.99-3.49,11.99-8.91,0-4.83-4.59-6.68-9.8-8.15l-6.1-1.64c-7.78-2.26-12.64-6.23-12.61-12.95-.03-8.39,7.43-13.91,17.06-13.91s16.55,5.62,16.79,13.15h-6.03c-.51-4.86-5.04-7.67-10.96-7.67Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <path
              d="M138.51,50.29h-6.17V.69h6.17v49.6Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <path
              d="M169.79,5.75c-8.77,0-15.72,6.92-15.76,19.73.03,12.78,6.99,19.7,16.17,19.73,8.36-.03,14.15-5.58,14.25-14.39h-12.95v-5.41h18.98v5.34c0,12.3-8.46,20.21-20.28,20.21-13.26,0-22.16-9.8-22.13-25.49-.03-15.69,8.97-25.49,21.72-25.49,10.48,0,18.57,6.58,20.42,16.17h-6.37c-2.12-6.37-6.95-10.41-14.04-10.41Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <path
              d="M239.44,50.29h-5.89l-26.86-38.64h-.48v38.64h-6.17V.69h5.96l26.86,38.71h.48V.69h6.1v49.6Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
          </g>
          <g>
            <rect
              y="76.14"
              width="15.29"
              height="75.35"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <path
              d="M59.54,76.14h-30.6v75.35h30.6c20.96,0,36.17-16.48,36.17-39.18,0-19.95-16.23-36.17-36.17-36.17ZM59.54,138.81h-15.31v-49.93h15.31c11.71,0,20.88,10.95,20.88,24.93s-9.37,25-20.88,25Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <rect
              x="104.26"
              y="138.93"
              width="53.34"
              height="12.56"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <path
              d="M210.81,76.14h-18.58l-28.63,75.35h15.84l6.59-17.34h31l6.59,17.34h15.84l-28.63-75.35ZM190.77,121.66l10.75-28.29,10.75,28.29h-21.5Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
            <path
              d="M130.93,76.2c-15.33,0-27.79,12.02-27.79,26.79s12.47,26.79,27.79,26.79c10.84,0,20.67-6.09,25.22-15.56h-15.81c-2.52,3.01-5.85,4.66-9.41,4.66-5.64,0-10.69-4.28-12.55-10.65l-.14-.48h25.41s14.64,0,14.64,0c.29-1.63.44-3.21.44-4.77,0-14.77-12.47-26.79-27.79-26.79ZM118.24,98.23l.14-.48c1.87-6.37,6.91-10.65,12.55-10.65s10.69,4.28,12.55,10.65l.14.48h-25.39Z"
              style={{ fill: '#040000', strokeWidth: 0 }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default AboutBreaker;
