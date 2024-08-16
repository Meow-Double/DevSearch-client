import { ComponentProps, forwardRef, ReactNode, useId } from 'react';
import styles from './Checkbox.module.css';
import clsx from 'clsx';

type CheckboxTextVariant = 'default';

interface CheckboxProps extends ComponentProps<'label'> {
  children?: ReactNode;
  variant?: CheckboxTextVariant;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, className, variant = 'default' }, ref) => {
    const id = useId();

    // const toggleCheckbox = () => {
    //   if (ref?.current) {
    //     ref.current.checked = !ref.current.checked;
    //   }
    // };

    return (
      <label
        htmlFor={id}
        className={clsx(styles.label, className)}
        role='checkbox'
        tabIndex={0}
        // onKeyPress={(event) => {
        //   if (event.key === 'Enter') {
        //     toggleCheckbox();
        //   }
        // }}
      >
        <input
          ref={ref}
          id={id}
          role='none'
          tabIndex={-1}
          type='checkbox'
          className={styles.input}
        />
        <span className={styles.checkbox} />
        <span className={clsx(styles.text, styles[variant])}>{children}</span>
      </label>
    );
  }
);
