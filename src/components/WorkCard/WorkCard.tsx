import { Button, Typography } from '@/shared';
import styles from './WorkCard.module.css';
import { useNavigate } from 'react-router-dom';

interface WorkCardProps {
  specialization: string;
  paycheck: string;
  workExperience: string;
  specialization_desc: string;
  company_name: string;
  id: string;
}

export const WorkCard = ({
  specialization,
  paycheck,
  workExperience,
  specialization_desc,
  company_name,
  id
}: WorkCardProps) => {
  const navigate = useNavigate();
  return (
    <li className={styles.card}>
      <div className={styles.info_block}>
        <Typography tag='h2' variant='title20_medium'>
          {specialization}
        </Typography>
        <Typography variant='title16_regular' tag='h4'>
          Компания: {company_name}
        </Typography>
        {/* <Tag variant='work'>{paycheck}</Tag> */}
        <Typography variant='title16_regular'>Зарплата: {paycheck}</Typography>
        <Typography variant='title16_regular'>Опыт работы: {workExperience}</Typography>

        <Typography tag='p' variant='title16_regular' className={styles.desc}>
          {specialization_desc}
        </Typography>
      </div>
      <Button onClick={() => navigate(`/work-card/${id}`)} variant='primary'>
        Подробнее
      </Button>
    </li>
  );
};
