import { ButtonHTMLAttributes, ComponentProps, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Tag.module.css';
import CloseSvg from '@/assets/svg/close.svg';
import { Button } from '@/shared';

type TagProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode;
  link?: string;
  target?: string;
} & ComponentProps<'div'>;

export const Tag = ({ children, onClick, link, target = '_blank', ...props }: TagProps) => {
  return (
    <div className={styles.tag} {...props}>
      <a href={link} target={target}>
        <p>{children}</p>
      </a>
      <Button type='button' onClick={onClick} className={styles.btn} variant='outlined'>
        <img className={styles.icon} src={CloseSvg} alt='close' />
      </Button>
    </div>
  );
};
