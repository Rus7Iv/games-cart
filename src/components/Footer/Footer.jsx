import styles from '../Footer/Footer.module.css';

export default function Footer(){
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>Rus07Iv</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};