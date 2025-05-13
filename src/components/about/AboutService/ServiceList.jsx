import ServiceItem from './ServiceItem';
import styles from './ServiceList.module.scss';

const serviceItems = [
  {
    title: 'Experience Design',
    items: [
      'Service Design',
      'User Experience (UX) Design',
      'User Interface (UI) Design',
      'Customer Journey Mapping',
      'Interaction Design',
      'Spatial Experience',
      'Retail & Exhibition Design',
      'Gamification & Playful Experiences',
      'Augmented & Virtual Reality (AR/VR)',
    ],
  },
  {
    title: 'Product Design',
    items: [
      'Industrial Design',
      'Material Research & Development',
      'Prototyping & Manufacturing',
      'Ergonomics & Human-Centered Design',
      'Sustainable Design Solutions',
      'Smart & IoT Product Design',
      'Wearable Technology',
      'CMF Strategy',
      'Furniture & Lifestyle Goods Design',
    ],
  },
  {
    title: 'Visual Design',
    items: [
      'Identity Design',
      'Brand Manuals',
      'Brand Strategy',
      'Naming',
      'Editorial & Print',
      'Packaging',
      'Merchandise',
      'Pattern Design',
      'Motion Graphics',
      'Web and Digital Experience',
    ],
  },
  {
    title: 'Digital Contents',
    items: [
      'Digital Storytelling',
      '3D & Motion Graphics',
      'Interactive Media & Installations',
      'Social Media Content Design',
      'AR/VR Content Development',
      'Digital Art Direction',
    ],
  },
  {
    title: 'Design Consulting',
    items: [
      'Brand & Identity Consulting',
      'Market & Trend Research',
      'Business & Innovation Strategy',
      'Consumer Insights & Data Analysis',
      'Sustainable Design Strategy',
      'Future Scenario Planning',
    ],
  },
  {
    title: 'Convergence Design',
    items: [
      'AI & Data-Driven Design',
      'Design for Smart Cities',
      'Cross-Disciplinary Collaboration',
      'Bio-Inspired & Biomimicry Design',
      'Cultural & Heritage-Based Design',
      'Science & Technology Integration',
      'Experience & Environment Design',
      'Social Impact & Inclusive Design',
    ],
  },
];

function ServiceList() {
  return (
    <ul className={styles.serviceList}>
      {serviceItems.map((item) => (
        <ServiceItem key={item.title} title={item.title} items={item.items} />
      ))}
    </ul>
  );
}

export default ServiceList;
