import { Typography } from '@/shared';
import styles from './RespondCard.module.css';
import { Link } from 'react-router-dom';

interface RespondCardProps {
  workId: string;
  specialization: string;
  company_name: string;
  status: string;
}

export const RespondCard = ({ workId, specialization, company_name, status }: RespondCardProps) => {
  return (
    <dt className={styles.row}>
      <td className={styles.column}>
        <Typography tag='h2' variant='title20_medium'>
          <Link to={`/work-card/${workId}`} className={styles.link}>
            {specialization}
          </Link>
        </Typography>
      </td>
      <td className={styles.column}>
        <Typography tag='h3' variant='title16_medium'>
          {company_name}
        </Typography>
      </td>
      <td className={styles.column}>
        <Typography tag='h4' variant='title16_regular'>
          {status}
        </Typography>
      </td>
    </dt>
  );
};
