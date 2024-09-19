import { ComponentProps, forwardRef, useId, useState } from 'react';
import styles from './Checkbox.module.css';
import clsx from 'clsx';

type CheckboxTextVariant = 'default';

export interface CheckboxProps extends ComponentProps<'label'> {
  label?: string;
  variant?: CheckboxTextVariant;
  onChecked?: () => void;
  onNotChecked?: () => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, variant = 'default', onChecked, onNotChecked, ...props }, ref) => {
    const id = useId();
    const [isCheck, setIsCheck] = useState(false);

    const handleChange = () => {
      setIsCheck((prev) => {
        const newChecked = !prev;
        if (newChecked && onChecked) {
          onChecked();
        } else if (!newChecked && onNotChecked) {
          onNotChecked();
        }
        return newChecked;
      });
    };

    return (
      <>
        <label className={clsx(styles.label, className)} {...props}>
          <input
            ref={ref}
            id={id}
            role='none'
            tabIndex={-1}
            type='checkbox'
            checked={isCheck}
            onChange={handleChange}
            className={styles.input}
          />
          <span className={styles.checkbox} />
          {label && <span className={clsx(styles.text, styles[variant])}>{label}</span>}
        </label>
      </>
    );
  }
);
