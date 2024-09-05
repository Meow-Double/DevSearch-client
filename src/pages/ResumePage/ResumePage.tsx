import { AsideMenu } from '@/components';
import styles from './ResumePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GeneralSection, SkillsSection, WorkExperienceSection } from './components';
import { useResume } from '@/global/store';
import { Button, Confirm } from '@/shared';
import { deleteResume, getResume } from '@/api/requests';

// const NavigationItems = [
//   { path: 'general', component: <GeneralSection /> },
//   { path: 'work-experience', component: <WorkExperienceSection /> }
// ];

export const ResumePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { setData, resetData } = useResume((state) => state);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    if (!params.id) {
      navigate('/resume/general');
    }
  }, [params]);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    getResume({ config: { headers: { Authorization: token } } }).then((res) => setData(res.data));
  }, []);

  const onDeleteResume = () => {
    setConfirmOpen(true);
  };

  const onSuccessConfirm = () => {
    const token = window.localStorage.getItem('token');
    setConfirmOpen(false);
    deleteResume({ config: { headers: { Authorization: token } } });
    resetData();
  };
  const onUnSuccessConfirm = () => {
    setConfirmOpen(false);
  };

  return (
    <>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.menu}>
            <AsideMenu />
            <Button onClick={onDeleteResume} className={styles.remove_btn} variant='error'>
              Удалить резюме
            </Button>
          </div>
          {params.id === 'general' && (
            <div className={styles.section}>
              <GeneralSection />
            </div>
          )}
          {params.id === 'work-experience' && (
            <div className={styles.section}>
              <WorkExperienceSection />
            </div>
          )}
          {params.id === 'skills' && (
            <div className={styles.section}>
              <SkillsSection />
            </div>
          )}
        </div>
      </div>
      {confirmOpen && (
        <Confirm successfulClick={onSuccessConfirm} unSuccessfulClick={onUnSuccessConfirm}>
          Вы действительно хотите удалить своё резюме?
        </Confirm>
      )}
    </>
  );
};
