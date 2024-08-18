import { ComponentProps, ReactNode } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

interface ModalProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const modalElement = document.querySelector('#modal');

export const Modal = ({ children, className, ...props }: ModalProps) => {
  return (
    modalElement &&
    createPortal(
      <div className={clsx(styles.overlay, className)} {...props}>
        <div className={styles.body} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      modalElement
    )
  );
};
