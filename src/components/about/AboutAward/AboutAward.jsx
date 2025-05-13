import AwardItem from './AwardItem';
import styles from './AboutAward.module.scss';

const awards = [
  'Reddot Design Awards: Concept Design - ‘Terminal Reel’ WINNER (2024)',
  '2024 International Busan Design Award(IBDA): Communication Design - ‘Beachcombing’ Branding IBDA Winner (2024)',
  'Busan Metropolitan City Brand Goods Design Award: ‘Busan is Good Disposable Camera’ Participation Award (2024)',
  '2023 International Busan Design Award(IBDA): Communication Design - ‘Welcome Drink’ Packaging IBDA Idea (2023)',
];

function AboutAward() {
  return (
    <div className={styles.groupAwards}>
      <strong className="headline">Awards&nbsp;&nbsp;</strong>
      <ul>
        {awards.map((award, index) => (
          <AwardItem key={index} award={award} />
        ))}
      </ul>
    </div>
  );
}

export default AboutAward;
