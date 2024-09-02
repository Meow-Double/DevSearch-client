import { Button, Typography } from '@/shared';
import styles from './ResponsesPage.module.css';

export const ResponsesPage = () => {
  return (
    <div className='container'>
      <div className={styles.inner}>
        <Button variant='primary'>Создать вакансию</Button>
        <Typography tag='h2' variant='title24_bold'>
          Ваши отклики на вакансии:
        </Typography>
      </div>
    </div>
  );
};
