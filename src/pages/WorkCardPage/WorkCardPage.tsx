import { Button, Tag, Typography } from '@/shared';
import styles from './WorkCardPage.module.css';

export const WorkCardPage = () => {
  return (
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.desc_block}>
          <img
            className={styles.img}
            src='https://img.lovepik.com//photo/50060/4615.jpg_860.jpg'
            alt=''
          />
          <Typography tag='h2' variant='title24_bold'>
            Junior frontend developer
          </Typography>
          <div>
            <Typography tag='h3' variant='title16_medium'>
              Компания: MilkiWay
            </Typography>
            <Typography tag='h3' variant='title16_medium'>
              Опыт работы: 0 лет
            </Typography>
            <Typography tag='h3' variant='title16_medium'>
              Ожидаемая зарплата: 600$
            </Typography>
          </div>
          <div>
            <Typography className={styles.title} tag='h2' variant='title20_medium'>
              Кого мы ищем:
            </Typography>
            <p>
              Ищем в команду разработчика веб сайтов. Нам очень важно, что бы у вас был опыт работы
              с такими инструментами, как react, redux,
            </p>
          </div>
          <div>
            <Typography className={styles.title} tag='h2' variant='title20_medium'>
              От вас требуется:
            </Typography>
            <ul className={styles.requirements}>
              <li>- Знание HTML,CSS</li>
              <li>- Умение писать тесты</li>
            </ul>
          </div>
          <div>
            <Typography className={styles.title} tag='h2' variant='title20_medium'>
              Чем вы будете заниматься:
            </Typography>
            <p>Разрабатывать ui компоненты</p>
          </div>
          <div>
            <Typography className={styles.title} tag='h2' variant='title20_medium'>
              Описание компании:
            </Typography>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vitae optio
              accusantium sunt facilis dolore dolores! Quidem, fugiat eum deserunt cum molestiae
              numquam ex voluptates delectus qui ipsum! Natus, doloribus.
            </p>
          </div>
          <div>
            <Typography className={styles.title} tag='h2' variant='title20_medium'>
              Используемые технологии:
            </Typography>
            <ul className={styles.technologies}>
              <li>
                <Tag>HTML</Tag>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.info_block}>
          <Typography variant='title20_medium' tag='h3'>
            Откликнулись: 11 человек
          </Typography>
          <Typography variant='title20_medium' tag='h3'>
            Сейчас смотрят: 2 человека
          </Typography>
          <Button variant='primary'>Откликнуться</Button>
          <div>
            <Typography variant='title20_medium' tag='h3'>
              Автор вакансии:
            </Typography>
            <div className={styles.author}>
              <a href='#!' className={styles.author_link}>DennnOlde</a>
              <img
                className={styles.author_img}
                src='http://localhost:8080/uploads/users/ec5523bc-9f33-4eae-95f4-5705ff614a0c.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
