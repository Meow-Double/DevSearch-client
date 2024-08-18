import { ComponentProps, forwardRef, useId } from 'react';
import styles from './Checkbox.module.css';
import clsx from 'clsx';

type CheckboxTextVariant = 'default';

interface CheckboxProps extends ComponentProps<'label'> {
  label?: string;
  variant?: CheckboxTextVariant;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, variant = 'default', ...props }, ref) => {
    const id = useId();

    // const toggleCheckbox = () => {
    //   if (ref?.current) {
    //     ref.current.checked = !ref.current.checked;
    //   }
    // };

    return (
      <>
        <label className={clsx(styles.label, className)} {...props}>
          <input
            ref={ref}
            id={id}
            role='none'
            tabIndex={-1}
            type='checkbox'
            className={styles.input}
          />
          <span className={styles.checkbox} />
          {label && <span className={clsx(styles.text, styles[variant])}>{label}</span>}
        </label>
      </>
    );
  }
);
