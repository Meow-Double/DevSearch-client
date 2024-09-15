import { Button, Modal, Typography } from '@/shared';
import styles from './RespondModal.module.css';
import { Link } from 'react-router-dom';
import { postAddWatching } from '@/api/requests/respond/watching';
import { useEffect, useState } from 'react';

interface RespondModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  responded: AuthorWorkCardTypes[];
  workId: string;
  watching: AuthorWorkCardTypes[];
}

export const RespondModal = ({
  isOpen,
  setIsOpen,
  responded,
  workId,
  watching
}: RespondModalProps) => {
  const [respondIds, setRespondIds] = useState<string[]>([]);
  const onAddWatching = (index: number) => {
    const token = window.localStorage.getItem('token');
    const values = {
      workId,
      ...responded[index]
    };
    postAddWatching({ params: values, config: { headers: { Authorization: token } } });
  };

  useEffect(() => {
    const watchingIds = watching.map((item) => item.id);
    const respondIds = responded.map((item) => item.id);
    const disabledArrayIds = watchingIds.filter((item) => respondIds.includes(item));
    setRespondIds(disabledArrayIds);
  }, [watching, responded]);

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
              <Button
                disabled={respondIds.includes(item.id) ? true : false}
                onClick={() => onAddWatching(index)}
                className={styles.btn}
                variant='primary'
              >
                Расмотреть
              </Button>
            </li>
          ))}
        </ul>
      </Modal>
    )
  );
};
