import { MouseEventHandler, ReactNode, useState } from 'react';
import { Typography } from '../Typography/Typography';
import styles from './Accordion.module.css';
import clsx from 'clsx';

interface AccordionProps {
  children: ReactNode;
  items: Array<ReactNode>;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

export const Accordion = ({ children, items, onClick }: AccordionProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accord}>
      <Typography
        className={styles.title}
        onClick={() => setOpen((prev) => !prev)}
        variant='title20_medium'
      >
        {children}
      </Typography>
      <ul className={clsx(styles.list, open && styles.active)}>
        {items.map((item, index) => (
          <li key={index} onClick={onClick}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
