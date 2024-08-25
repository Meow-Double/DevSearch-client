import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import styles from './Textarea.module.css';

type TextareaVariant = 'primary';

type TextareaProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'textarea'
> = {
  label?: string;
  error?: string;
  variant: TextareaVariant;
  component: Component;
} & ComponentProps<Component>;

export const Textarea = forwardRef(
  (
    {
      variant,
      component,
      label,
      className,
      error,
      id: externalId,
      ...props
    }: TextareaProps<'textarea'>,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const internalId = useId();
    const id = externalId ?? internalId;
    const Component = component || 'textarea';
    return (
      <div className={clsx({ [styles.error]: !!error }, styles.container)}>
        {label && (
          <label htmlFor={id} className={styles.label_text}>
            {label}
          </label>
        )}
        <Component
          className={clsx(styles.textarea, styles[variant], className)}
          {...props}
          id={id}
          ref={ref}
        />
        {error && <p className={styles.error_text}>{error}</p>}
      </div>
    );
  }
) as <
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'textarea'
>(
  props: TextareaProps<Component> & { ref?: React.ForwardedRef<HTMLTextAreaElement> }
) => React.ReactElement;
