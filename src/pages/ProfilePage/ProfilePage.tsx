import { Button, Typography } from '@/shared';
import styles from './ProfilePage.module.css';
import { useUser } from '../AuthPages/store/store';
import { useNavigate } from 'react-router-dom';
import { ResumeList, ResumeListProps } from '@/components';
import { useEffect, useState } from 'react';
import { getResume } from '@/api/requests/resume';

export const ProfilePage = () => {
  const user = useUser((state) => state.user);
  const [resumeData, setResumeData] = useState<ResumeListProps>();

  const navigate = useNavigate();

  useEffect(() => {
    getResume({ params: { id: user?.id ? user?.id : '' } }).then((res) => setResumeData(res.data));
  }, [user]);

  return (
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.user_info}>
          <img
            className={styles.img}
            src='https://i.pinimg.com/736x/8c/56/2f/8c562fa08cea986413a0af547c660a95.jpg'
            alt='avatar'
          />
          <Typography className={styles.name} variant='title20_medium' tag='h4'>
            {user?.name}
          </Typography>
          <Typography variant='title16_regular' tag='h5'>
            {user?.email}
          </Typography>
        </div>
        {resumeData ? (
          <ResumeList {...resumeData} />
        ) : (
          <div className={styles.resume}>
            <p>Резюме отсуствует.</p>
            <p>Хотите создать его?</p>
            <Button onClick={() => navigate('/resume')} className={styles.btn} variant='primary'>
              Создать резюме
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
