import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | "outlined";

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant: ButtonVariant;
  loading?: boolean;
}

export const Button = ({ children, variant, className, loading, ...props }: ButtonProps) => {
  return (
    <button
      disabled={loading ? true : false}
      className={clsx(styles.btn, styles[variant], className)}
      {...props}
    >
      {loading ? <>Loading...</> : <>{children}</>}
    </button>
  );
};
