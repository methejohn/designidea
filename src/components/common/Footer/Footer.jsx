import { useLocation } from 'react-router-dom';
import styles from './Footer.module.scss';
import FooterItem from './FooterItem';
import LogoAni from '../LogoAni';

function Footer() {
  const location = useLocation();
  const isAbout = location.pathname === '/about';
  return (
    <footer className={styles.footer}>
      <div className={styles.groupTop}>{!isAbout && <LogoAni />}</div>
      <ul>
        <FooterItem>CEO 강진명</FooterItem>
        <FooterItem>사업자등록번호 380-88-02538</FooterItem>
        <FooterItem>계좌번호 101-2082-3382-01(부산은행)</FooterItem>
        <FooterItem>개인정보보호 책임자: 김성연</FooterItem>
        <FooterItem>T.051-714-3830</FooterItem>
        <FooterItem>F.051-714-3831</FooterItem>
      </ul>
    </footer>
  );
}

export default Footer;
