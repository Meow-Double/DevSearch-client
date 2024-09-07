import { Button, Modal, Typography } from '@/shared';
import styles from './RespondModal.module.css';
import { Link } from 'react-router-dom';
import { postAddWatching } from '@/api/requests/respond/watching';

interface RespondModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  responded: AuthorWorkCardTypes[];
  workId: string;
}

export const RespondModal = ({ isOpen, setIsOpen, responded, workId }: RespondModalProps) => {
  const onAddWatching = (index: number) => {
    const values = {
      workId,
      ...responded[index]
    };
    postAddWatching({ params: values });
  };

  return (
    isOpen && (
      <Modal className={styles.modal} onClick={() => setIsOpen(false)}>
        <Typography className={styles.title} tag='h2' variant='title20_medium'>
          Список откликнувшихся
        </Typography>

        <ul className={styles.cards}>
          {responded.map((item, index) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.row}>
                <img className={styles.avatar} src={item.avatarUrl} alt='avatar' />
                <Typography variant='title16_regular'>
                  <Link to={`/profile/${item.id}`}>{item.name}</Link>
                </Typography>
              </div>
              <Button onClick={() => onAddWatching(index)} className={styles.btn} variant='primary'>
                Расмотреть
              </Button>
            </li>
          ))}
        </ul>
      </Modal>
    )
  );
};
