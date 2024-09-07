import { Button, Typography } from '@/shared';
import styles from './ResponsesPage.module.css';
import { RespondCard } from './components';
import { useEffect, useState } from 'react';
import { getResponds } from '@/api/requests';
import { WorkCard } from './components';
import { getMyWorks } from '@/api/requests/work/my-works';
import clsx from 'clsx';

export const ResponsesPage = () => {
  const [data, setData] = useState<RespondsType>([]);
  const [items, setItems] = useState<WatchingsType>([]);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    getResponds({ config: { headers: { Authorization: token } } }).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    getMyWorks({ config: { headers: { Authorization: token } } }).then((res) => setItems(res.data));
  }, []);

  return (
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.btns}>
          <Button
            onClick={() => setActiveIndex(1)}
            className={clsx(styles.btn, activeIndex === 1 && styles.active)}
            variant='primary'
          >
            Отклики
          </Button>
          <Button
            onClick={() => setActiveIndex(0)}
            className={clsx(styles.btn, activeIndex === 0 && styles.active)}
            variant='primary'
          >
            Ваши вакансии
          </Button>
        </div>
        {activeIndex ? (
          data.length ? (
            <table className={styles.tabel}>
              <dt className={styles.row}>
                <td className={styles.column}>Специализация</td>
                <td className={styles.column}>Компания</td>
                <td className={styles.column}>Статус</td>
              </dt>
              {data.map((item, index) => (
                <RespondCard key={index} {...item} />
              ))}
            </table>
          ) : (
            <Typography tag='h2' variant='title24_bold'>
              У вас нет откликов
            </Typography>
          )
        ) : (
          <ul className={styles.cards}>
            {items.map((item) => (
              <WorkCard key={item.id} {...item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
