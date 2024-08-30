import clsx from 'clsx';
import { ComponentProps, forwardRef, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outlined' | 'error';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant: ButtonVariant;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, loading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={loading ? true : false}
        className={clsx(styles.btn, styles[variant], className)}
        {...props}
      >
        {loading ? <>Loading...</> : <>{children}</>}
      </button>
    );
  }
);
