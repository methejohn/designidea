import CategoryItem from './CategoryItem';
import styles from './EternosHeadline.module.scss';

const categoryItems = [
  { title: 'Category', content: 'Branding' },
  { title: 'Type', content: 'Packaging, UI, Web Design' },
  { title: 'Date', content: '2024.01~02' },
  {
    title: 'Note',
    content:
      'Eternos is a brand that targets kidults, collecting, repackaging, and selling used toys. Eternos not only offer toys but also provide associated memories and stories.',
  },
];

function EternosHeadline() {
  return (
    <div className={styles.groupTop}>
      <div className={styles.headlineArea}>
        <h2 className="headline">ETERNOS</h2>
      </div>
      <ul>
        {categoryItems.map(({ title, content }) => (
          <CategoryItem key={title} title={title} content={content} />
        ))}
      </ul>
    </div>
  );
}

export default EternosHeadline;
