import { Link } from 'react-router-dom';
import styles from './AsideMenu.module.css';
import { useState } from 'react';
import clsx from 'clsx';

// const menuList = ['General', 'Work experience', 'Technologies & skills', 'Portfolio'];
const menuList = [
  {
    name: 'General',
    path: '/resume/general'
  },
  {
    name: 'Work experience',
    path: '/resume/work-experience'
  },
  {
    name: 'Technologies & skills',
    path: '/resume/skills'
  },
  {
    name: 'Portfolio',
    path: '/resume/portfolio'
  }
];

export const AsideMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside>
      <ul className={styles.menu}>
        {menuList.map((item, index) => (
          <li
            className={clsx(styles.item, activeIndex === index && styles.active)}
            key={item.name}
            onClick={() => setActiveIndex(index)}
          >
            <Link className={styles.link} to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
