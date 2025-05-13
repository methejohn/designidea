import Form from '../common/Form';
import ContactItem from './ContactItem';
import styles from './ContactList.module.scss';

function ContactList({ name = '' }) {
  return (
    <div className={`${styles.groupContact} ${name}`}>
      <h2 className="blind">CONTACT</h2>
      <Form />
      <ul className={styles.contactList}>
        <ContactItem title="OPEN">
          <span>08:00 - 17:00</span>
        </ContactItem>
        <ContactItem title="CONTACT">
          <a href="mailto:designidea1108@gmail.com">designidea1108@gmail.com</a>
          <a href="tel:+82-51-714-3830">+82-51-714-3830</a>
        </ContactItem>
        <ContactItem title="ADDRESS">
          <span>
            306, 922, Jungang-daero, Busanjin-gu, Busan, Republic of Korea
          </span>
          <span>
            부산시 부산진구 중앙대로 922(양정동) 부산콘텐츠비즈타운 306호
          </span>
        </ContactItem>
      </ul>
    </div>
  );
}

export default ContactList;
