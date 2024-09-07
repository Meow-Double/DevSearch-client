import { Modal, Typography } from '@/shared';
import styles from './WatchingModal.module.css';
import { Link } from 'react-router-dom';

interface WatchingModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  watching: AuthorWorkCardTypes[];
//   workId: string;
}
export const WatchingModal = ({ isOpen, setIsOpen, watching }: WatchingModalProps) => {
//   const onAddWatching = (index: number) => {
    // const values = {
    //   workId,
    //   ...watching[index]
    // };
    // postAddWatching({ params: values });
//   };

  return (
    isOpen && (
      <Modal className={styles.modal} onClick={() => setIsOpen(false)}>
        <Typography className={styles.title} tag='h2' variant='title20_medium'>
          Список просматриваемых вами кондидатов
        </Typography>

        <ul className={styles.cards}>
          {watching.map((item) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.row}>
                <img className={styles.avatar} src={item.avatarUrl} alt='avatar' />
                <Typography variant='title16_regular'>
                  <Link to={`/profile/${item.id}`}>{item.name}</Link>
                </Typography>
              </div>
              {/* <Button onClick={() => onAddWatching(index)} className={styles.btn} variant='error'>
                Удалить
              </Button> */}
            </li>
          ))}
        </ul>
      </Modal>
    )
  );
};
