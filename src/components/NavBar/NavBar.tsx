import { LogoTitle } from '@/shared';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.menu}>
          <LogoTitle text='DEV'>Search</LogoTitle>
          <Link to='/auth'>Войти</Link>
        </nav>
      </div>
    </header>
  );
};
