import { Button, Tag, Typography } from '@/shared';
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  title: string;
  price: number;
  workExperience: string;
  desc: string;
  company:string;
}

export const WorkCard = ({ title, price, workExperience, desc, company }: WorkCardProps) => {
  return (
    <li className={styles.card}>
      <Typography tag='h2' variant='title16_regular'>
        {title}
      </Typography>
      <div className={styles.info}>
        <Tag variant='work'>{price}$</Tag>
        <Typography variant='title16_regular'>Опыт работы: {workExperience}</Typography>
      </div>
      <Typography variant='title16_regular' tag='h4'>Компания: {company}</Typography>
      <Typography tag='p' variant='title16_regular' className={styles.desc}>
        {desc}
      </Typography>
      <Button variant='primary'>Подробнее</Button>
    </li>
  );
};
