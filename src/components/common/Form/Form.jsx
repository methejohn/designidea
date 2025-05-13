import FormItem from './FormItem';
import styles from './Form.module.scss';

const formItems = [
  {
    label: '*NAME:',
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    label: 'COMPANY(OPTION):',
    name: 'company',
    type: 'text',
    required: false,
  },
  {
    label: '*E-MAIL:',
    name: 'email',
    type: 'email',
    required: true,
  },
  {
    label: '*PHONE-NUMBER:',
    name: 'phone',
    type: 'tel',
    required: true,
  },
  {
    label: '*MESSAGE:',
    name: 'message',
    type: 'textarea',
    required: true,
    rows: 5,
  },
];

function Form() {
  return (
    <form action="" method="post" className={styles.contactForm}>
      <fieldset>
        <legend className="headline">
          Feel free to ask us
          <br />
          Everything You Want.
        </legend>
        <ul>
          {formItems.map((item) => (
            <FormItem
              key={item.name}
              label={item.label}
              name={item.name}
              type={item.type}
              required={item.required}
              rows={item.rows}
            />
          ))}
        </ul>
        <button type="submit">SUBMIT</button>
      </fieldset>
    </form>
  );
}

export default Form;
