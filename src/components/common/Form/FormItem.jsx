import styles from './FormItem.module.scss';

function FormItem({ label, type, name, required, rows }) {
  return (
    <li className={styles.formItem}>
      <label>
        <span>{label}</span>
        {type === 'textarea' ? (
          <textarea name={name} rows={rows} required={required} />
        ) : (
          <input type={type} name={name} required={required} />
        )}
      </label>
    </li>
  );
}

export default FormItem;
