import WorkList from '@/components/work/WorkList';

const workItems = [
  {
    title: 'SCENT404, 2024',
    image: '/scent404.webp',
  },
  {
    title: 'MELLOW, 2024',
    image: '/mellow.webp',
  },
  {
    title: 'YAPPY HOUR, 2024',
    image: '/yappyhour.webp',
  },
  {
    title: 'IDEADX, 2024',
    image: '/ideadx.webp',
  },
  {
    title: 'RECYCLE PACKAGE, 2024',
    image: '/recycle.webp',
  },
  {
    title: 'SELPORCELAIN, 2024',
    image: '/selporcelain.webp',
  },
  {
    title: 'Greenhouse Driving Robot, 2024_Coming Soon',
    image: '/greenhouse.webp',
  },
  {
    title: 'HADAN 5DAYS MARKET, 2024',
    image: '/hadan.webp',
  },
  {
    title: 'Flying Farmbot, 2024_Coming Soon',
    image: '/farmbot.webp',
  },
  {
    title: 'HAKSEONG FUNITURE STREET, 2024',
    image: '/hakseong.webp',
  },
];

function Work() {
  return (
    <main className="main">
      <section className="sc-work">
        <h2 className="blind">WORK</h2>
        <WorkList
          items={workItems}
          name={'work'}
          showHeadline={false}
          showTabs={true}
        />
      </section>
    </main>
  );
}

export default Work;
