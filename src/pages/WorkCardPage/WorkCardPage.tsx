import { Button, Tag, Typography } from '@/shared';
import styles from './WorkCardPage.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getWork, postResponds } from '@/api/requests';
import { useWorkData } from './store';

export const WorkCardPage = ({}) => {
  const { id } = useParams();
  const { setWorkData, workData } = useWorkData((state) => state);

  useEffect(() => {
    if (id) {
      getWork({ params: { id } }).then((res) => setWorkData(res.data));
    }
  }, [id]);

  const onRespondWork = () => {
    const token = window.localStorage.getItem('token');
    const respondItems = {
      status: 'Ожидание',
      workId: id ?? '',
      specialization: workData?.specialization ?? '',
      company_name: workData?.company_name ?? ''
    };
    postResponds({ params: respondItems, config: { headers: { Authorization: token } } });
  };

  return (
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.desc_block}>
          {workData?.backgroundImg && (
            <img className={styles.img} src={workData?.backgroundImg} alt='baner' />
          )}
          <Typography tag='h2' variant='title24_bold'>
            {workData?.specialization}
          </Typography>
          <div>
            <Typography tag='h3' variant='title16_medium'>
              {workData?.company_name}
            </Typography>
            <Typography tag='h3' variant='title16_medium'>
              Опыт работы: {workData?.workExperience}
            </Typography>
            <Typography tag='h3' variant='title16_medium'>
              Ожидаемая зарплата: {workData?.paycheck}
            </Typography>
          </div>
          <div>
            <Typography className={styles.title} tag='h2' variant='title20_medium'>
              Кого мы ищем:
            </Typography>
            <p>{workData?.specialization_desc}</p>
          </div>
          {workData?.requirements.length !== 0 && (
            <div>
              <Typography className={styles.title} tag='h2' variant='title20_medium'>
                От вас требуется:
              </Typography>
              <ul className={styles.requirements}>
                {workData?.requirements.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </div>
          )}
          <div>
            <Typography className={styles.title} tag='h2' variant='title20_medium'>
              Чем вы будете заниматься:
            </Typography>
            <p>{workData?.job_desc}</p>
          </div>
          <div>
            <Typography className={styles.title} tag='h2' variant='title20_medium'>
              Описание компании:
            </Typography>
            <p>{workData?.desc}</p>
          </div>
          {workData?.technologies.length !== 0 && (
            <div>
              <Typography className={styles.title} tag='h2' variant='title20_medium'>
                Используемые технологии:
              </Typography>
              <ul className={styles.technologies}>
                {workData?.technologies.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.info_block}>
          <Typography variant='title20_medium' tag='h3'>
            Откликнулись: {workData?.responded.length} человек
          </Typography>
          <Typography variant='title20_medium' tag='h3'>
            Сейчас смотрят: {workData?.watching.length} человек
          </Typography>
          <Button variant='primary' onClick={onRespondWork}>
            Откликнуться
          </Button>
          <div>
            <Typography variant='title20_medium' tag='h3'>
              Автор вакансии:
            </Typography>
            <div className={styles.author}>
              <a href='#!' className={styles.author_link}>
                {workData?.author?.name}
              </a>
              <img className={styles.author_img} src={workData?.author?.avatarUrl} alt='avatarka' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
