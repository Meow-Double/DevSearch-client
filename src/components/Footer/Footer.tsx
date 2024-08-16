import { LogoTitle } from '@/shared';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div>
          <LogoTitle className={styles.title} text='dev'>Search</LogoTitle>
          <div className={styles.copyright}>©DEVSearch 2024, made Meow-Double</div>
        </div>
      </div>
    </footer>
  );
};
