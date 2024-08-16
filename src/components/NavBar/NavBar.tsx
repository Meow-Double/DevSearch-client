import { LogoTitle } from '@/shared';
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.menu}>
          <LogoTitle text='DEV'>Search</LogoTitle>
          <button>sign in</button>
        </nav>
      </div>
    </header>
  );
};
