import { ComponentProps, ReactNode, useEffect, useRef } from 'react';
import styles from './Confirm.module.css';
import clsx from 'clsx';
import { Typography } from '../Typography/Typography';
import { Button } from '../Button/Button';
import { createPortal } from 'react-dom';

interface ConfirmProps extends ComponentProps<'div'> {
  children: ReactNode;
  successfulClick: () => void;
  unSuccessfulClick: () => void;
}

const confirmElement = document.querySelector('#confirm');

export const Confirm = ({
  className,
  children,
  successfulClick,
  unSuccessfulClick
}: ConfirmProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }, []);

  const onClickSuccess = () => {
    successfulClick();
    window.onscroll = null;
  };
  const onClickUnSuccess = () => {
    unSuccessfulClick();
    window.onscroll = null;
  };

  return (
    confirmElement &&
    createPortal(
      <div className={styles.overlay} onClick={() => buttonRef.current?.focus()}>
        <div className={clsx(styles.body, className)} onClick={(e) => e.stopPropagation()}>
          <Typography className={styles.title} variant='title16_medium' tag='h2'>
            {children}
          </Typography>
          <div className={styles.buttons}>
            <Button
              tabIndex={1}
              role='button'
              className={styles.btn}
              variant='primary'
              onClick={onClickSuccess}
            >
              Да
            </Button>
            <Button
              ref={buttonRef}
              tabIndex={1}
              role='button'
              className={styles.btn}
              variant='error'
              onClick={onClickUnSuccess}
            >
              Нет
            </Button>
          </div>
        </div>
      </div>,
      confirmElement
    )
  );
};
