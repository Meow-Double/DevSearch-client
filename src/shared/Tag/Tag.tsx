import { ComponentProps, ReactNode } from 'react';
import styles from './Tag.module.css';
import clsx from 'clsx';

type TagVariants = 'work';

interface TagProps extends ComponentProps<'div'> {
  children: ReactNode;
  variant?: TagVariants;
}

export const Tag = ({ children, variant, className, ...props }: TagProps) => {
  return (
    <div className={clsx(styles.tag, variant && styles[variant], className)} {...props}>
      {children}
    </div>
  );
};
