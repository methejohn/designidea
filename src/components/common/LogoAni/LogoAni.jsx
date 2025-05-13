import styles from './LogoAni.module.scss';

function LogoAni() {
  return (
    <div className={styles.logoAni}>
      <img src="/logo-ani.gif" alt="DESIGN IDEA" loading="lazy" />
    </div>
  );
}

export default LogoAni;
