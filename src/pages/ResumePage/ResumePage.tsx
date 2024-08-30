import { AsideMenu } from '@/components';
import styles from './ResumePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { GeneralSection, SkillsSection, WorkExperienceSection } from './components';
import { getResume } from '@/api/requests/resume';
import { useResume } from '@/global/store';

export const ResumePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const setData = useResume((state) => state.setData);

  useEffect(() => {
    if (!params.id) {
      navigate('/resume/general');
    }
  }, [params]);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    getResume({ config: { headers: { Authorization: token } } }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className='container'>
      <div className={styles.inner}>
        <AsideMenu />
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
  );
};
