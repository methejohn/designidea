import AboutAward from '@/components/about/AboutAward';
import AboutBreaker from '@/components/about/AboutBreaker';
import AboutService from '@/components/about/AboutService';
import AboutTitle from '@/components/about/AboutTitle';
import AboutWork from '@/components/about/AboutWork';
// import styles from './About.module.scss';

function About() {
  return (
    <main className="main">
      <section className="sc-about">
        <h2 className="blind">ABOUT</h2>
        <AboutTitle />
        <AboutWork />
        <AboutService />
        <AboutAward />
        <AboutBreaker />
      </section>
    </main>
  );
}

export default About;
