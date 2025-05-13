import MainTitle from '@/components/main/MainTitle';
import MainVid from '@/components/main/MainVid';
import WorkList from '@/components/work/WorkList';
import ContactList from '@/components/contact/ContactList';

const workItems = [
  {
    title: 'MUCLE, 2023',
    image: '/mucle.webp',
  },
  {
    title: 'TERMINAL_3rd REEL, 2023',
    image: '/terminal.webp',
  },
  {
    title: 'IDEADX, 2024',
    image: '/ideadx.webp',
  },
  {
    title: 'MyeongBo, 2024_Coming Soon',
    image: '/myeongbo.webp',
  },
  {
    title: 'MELLOW, 2024',
    image: '/mellow.webp',
  },
  {
    title: 'ETERNOS, 2023',
    image: '/eternos.webp',
  },
  {
    title: 'SCENT404, 2024',
    image: '/scent404.webp',
  },
  {
    title: 'Greenhouse Driving Robot, 2024_Coming Soon',
    image: '/greenhouse.webp',
  },
  {
    title: 'YAPPY HOUR, 2024',
    image: '/yappyhour.webp',
  },
];

function Homepage({ mainVidRef }) {
  return (
    <main className="main">
      <section className="sc-main">
        <h2 className="blind">MAIN</h2>
        <MainVid ref={mainVidRef} />
        <MainTitle />
        <WorkList items={workItems} />
        <ContactList />
      </section>
    </main>
  );
}

export default Homepage;
