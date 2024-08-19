import { LogoTitle, Typography } from '@/shared';
import styles from './NavBar.module.css';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import ExitSvg from '@/assets/svg/exit.svg';
import ProfileSvg from '@/assets/svg/profile.svg';
import ResponsesSvg from '@/assets/svg/responses.svg';
import Settingsvg from '@/assets/svg/settings.svg';
import SummarySvg from '@/assets/svg/summary.svg';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.menu}>
          <LogoTitle text='DEV'>Search</LogoTitle>
          {/* <Link to='/auth'>Войти</Link> */}
          <div className={styles.profile_block}>
            <div className={styles.profile} onClick={handleIsOpen}>
              <Typography className={styles.name} tag='p' variant='title16_regular'>
                User 1
              </Typography>
              <img
                className={styles.img}
                src='https://i.pinimg.com/736x/8c/56/2f/8c562fa08cea986413a0af547c660a95.jpg'
                alt='avatarka'
              />
            </div>

            {isOpen && (
              <ul className={styles.dropdown}>
                <li className={styles.item}>
                  Профиль <img className={styles.icon} src={ProfileSvg} alt='' />
                </li>
                <li className={styles.item}>
                  Настройки <img className={styles.icon} src={Settingsvg} alt='' />
                </li>
                <li className={styles.item}>
                  резюме <img className={styles.icon} src={SummarySvg} alt='' />
                </li>
                <li className={styles.item}>
                  отклики <img className={styles.icon} src={ResponsesSvg} alt='' />
                </li>
                <li className={styles.item}>
                  Выйти <img className={styles.icon} src={ExitSvg} alt='' />
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
