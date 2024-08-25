import { Tag, Typography } from '@/shared';
import styles from './ResumeList.module.css';

export interface ResumeListProps {
  name: string;
  specialization: string;
  workExperience: workExperienceType[];
  technologies: [];
  skills: [];
}
type workExperienceType = {
  id: string;
  years: number;
  months: number;
  company_name: string;
  desc: string;
};
export const ResumeList = ({
  name,
  specialization,
  workExperience,
  technologies,
  skills
}: ResumeListProps) => {
  return (
    <div className='container'>
      <div className={styles.inner}>
        <div>
          <Typography variant='title24_bold' tag='h2'>
            {name}
          </Typography>
          <Typography variant='title16_regular'>{specialization}</Typography>
        </div>
        <div>
          <Typography className={styles.work_title} variant='title20_medium' tag='h3'>
            Опыт работы:
          </Typography>
          <ul>
            {workExperience.map((item) => (
              <li className={styles.work_block} key={item.id}>
                <div className={styles.work_info}>
                  <Typography variant='title16_regular' tag='h4' className={styles.work_date}>
                    {item.years} года {item.months} месяцев
                  </Typography>
                  <Typography variant='title16_regular' tag='h4'>
                    {item.company_name}
                  </Typography>
                </div>
                <div className={styles.work_desc}>{item.desc}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Typography className={styles.work_title} variant='title20_medium' tag='h3'>
            Технологии:
          </Typography>
          <ul className={styles.technologies}>
            {technologies.map((technology) => (
              <li key={technology}>
                <Tag>{technology}</Tag>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Typography className={styles.work_title} variant='title20_medium' tag='h3'>
            Дополнительные навыки:
          </Typography>
          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill}>
                <Typography variant='title16_regular' tag='h5'>
                  - {skill}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
