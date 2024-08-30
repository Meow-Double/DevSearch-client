import { LogoTitle, Typography } from '@/shared';
import styles from './NavBar.module.css';
import { useState } from 'react';
import ExitSvg from '@/assets/svg/exit.svg';
import ProfileSvg from '@/assets/svg/profile.svg';
import ResponsesSvg from '@/assets/svg/responses.svg';
import Settingsvg from '@/assets/svg/settings.svg';
import SummarySvg from '@/assets/svg/summary.svg';
import { useUser } from '@/pages/AuthPages/store/auth';
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [
  {
    name: 'Профиль',
    path: '/profile',
    icon: ProfileSvg
  },
  {
    name: 'Настройки',
    path: '/settings',
    icon: Settingsvg
  },
  {
    name: 'Резюме',
    path: '/resume',
    icon: SummarySvg
  },
  {
    name: 'отклики',
    path: '/responses',
    icon: ResponsesSvg
  },
  {
    name: 'Выйти',
    path: '/auth',
    icon: ExitSvg
  }
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuth, setIsAuth } = useUser((state) => state);
  const navigate = useNavigate();

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const toNavigate = (path: string) => {
    navigate(path);
    setIsOpen((prev) => !prev);

    if (path === '/auth') {
      window.localStorage.removeItem('token');
      setIsAuth(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.menu}>
          <LogoTitle text='DEV'>Search</LogoTitle>
          {isAuth ? (
            <div className={styles.profile_block}>
              <div className={styles.profile} onClick={handleIsOpen}>
                <Typography className={styles.name} tag='p' variant='title16_regular'>
                  {user?.name}
                </Typography>
                <img
                  className={styles.img}
                  // src='https://i.pinimg.com/736x/8c/56/2f/8c562fa08cea986413a0af547c660a95.jpg'
                  src={user?.avatar_url}
                  alt='avatarka'
                />
              </div>

              {isOpen && (
                <ul className={styles.dropdown}>
                  {menuItems.map((item) => (
                    <li className={styles.item} onClick={() => toNavigate(item.path)}>
                      <span>{item.name}</span>{' '}
                      <img className={styles.icon} src={item.icon} alt={item.name} />
                    </li>
                  ))}
                  {/* <li className={styles.item}>
                    Профиль <img className={styles.icon} src={ProfileSvg} alt='' />
                  </li> */}
                  {/* <li className={styles.item}>
                    Настройки <img className={styles.icon} src={Settingsvg} alt='' />
                  </li> */}
                  {/* <li className={styles.item}>
                    резюме <img className={styles.icon} src={SummarySvg} alt='' />
                  </li> */}
                  {/* <li className={styles.item}>
                    отклики <img className={styles.icon} src={ResponsesSvg} alt='' />
                  </li>
                  <li className={styles.item} onClick={onExitProfile}>
                    Выйти <img className={styles.icon} src={ExitSvg} alt='' />
                  </li> */}
                </ul>
              )}
            </div>
          ) : (
            <Link to='/auth'>Войти</Link>
          )}
        </nav>
      </div>
    </header>
  );
};
