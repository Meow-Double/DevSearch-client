import { Tag, Typography } from '@/shared';
import styles from './ResumeList.module.css';

export interface ResumeListProps extends ResumeData {
  name: string;
  about: string;
  specialization: string;
  contacts: ContactTypes[];
  workExperience: WorkExperienceTypes[];
  technologies: string[];
  skills: string[];
}

export const ResumeList = ({
  name,
  specialization,
  about,
  contacts,
  workExperience,
  technologies,
  skills
}: ResumeListProps) => {
  return (
    <div className='container'>
      <div className={styles.inner}>
        <div>
          {name && (
            <Typography variant='title24_bold' tag='h2'>
              {name}
            </Typography>
          )}
          {specialization && <Typography variant='title16_regular'>{specialization}</Typography>}
        </div>
        {workExperience.length !== 0 && (
          <div>
            <Typography className={styles.work_title} variant='title20_medium' tag='h3'>
              Опыт работы:
            </Typography>
            <ul>
              {workExperience.map((item, index) => (
                <li className={styles.work_block} key={index}>
                  <div className={styles.work_info}>
                    <Typography
                      variant='title16_bold'
                      tag='h4'
                      className={styles.work_specialization}
                    >
                      {item.specialization}
                    </Typography>
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
        )}
        {technologies.length !== 0 && (
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
        )}
        {skills.length !== 0 && (
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
        )}
        {contacts.length !== 0 && (
          <div>
            <Typography className={styles.work_title} variant='title20_medium' tag='h3'>
              Мои контакты:
            </Typography>
            <ul className={styles.contacts_list}>
              {contacts?.map((contact) => (
                <li key={contact.name}>
                  <a href={contact.path} target='_blank'>
                    <Tag>{contact.name}</Tag>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {about && (
          <div>
            <Typography className={styles.work_title} variant='title20_medium' tag='h3'>
              Обо мне:
            </Typography>
            <p>{about}</p>
          </div>
        )}
      </div>
    </div>
  );
};
