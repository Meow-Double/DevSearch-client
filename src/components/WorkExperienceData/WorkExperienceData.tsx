import { Typography } from '@/shared';
import styles from './WorkExperienceData.module.css';

interface WorkExperienceDataProps {
  years: number;
  months: number;
  desc: string;
  company_name: string;
}

export const WorkExperienceData = ({
  years,
  months,
  desc,
  company_name
}: WorkExperienceDataProps) => {
  return (
    <li className={styles.block}>
      <div className={styles.info}>
        <Typography variant='title16_regular' tag='h4' className={styles.date}>
          {years} года {months} месяцев
        </Typography>
        <Typography variant='title16_regular' tag='h4'>
          {company_name}
        </Typography>
      </div>
      <div className={styles.desc}>{desc}</div>
    </li>
  );
};
