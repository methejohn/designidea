import WorkItem from './WorkItem';
import styles from './WorkList.module.scss';

const workItems = [
  {
    image: '/carousel-img2.webp',
    title: 'ANIMATION',
    desc: 'We craft compelling narratives through motion, blending creativity and technology to evoke emotion and engagement. Every frame is designed with purpose, creating immersive experiences that leave a lasting impact.',
  },
  {
    image: '/carousel-img3.webp',
    title: 'VISUAL',
    desc: 'We bring brands to life through visuals that resonate and inspire. We pursue grounded design with a focus on value and detail.',
  },
  {
    image: '/carousel-img.webp',
    title: 'PRODUCT',
    desc: "Focusing on form and function, we don't just create products, we creat e inspiring experiences. Passion for creating beauty in every details: stylish, clean and fun.",
  },
];

function WorkList({ workListRef, workItemRefs }) {
  return (
    <div className={styles.workArea}>
      <ul ref={workListRef}>
        {workItems.map((item, index) => (
          <WorkItem
            key={item.title}
            ref={(el) => (workItemRefs.current[index] = el)}
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </ul>
    </div>
  );
}

export default WorkList;
