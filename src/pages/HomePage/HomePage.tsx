import { WorkCard } from '@/components';
import styles from './HomePage.module.css';

const array = [
  {
    id: 1,
    title: 'Front-end developer',
    price: 700,
    workExperience: '0 лет',
    desc: 'Ищем в команду разработчика веб сайтов. Нам очень важно, что бы у вас был опыт работы с такими инструментами, как react, redux, typescript, css, html, jest, nodejs, express, mongo db',
    company: 'HCJ Studio'
  },
  {
    id: 2,
    title: 'Backend NodeJs Middle',
    price: 1200,
    workExperience: '2-3 года',
    desc: 'Срочно нужен Бэкендер, который не только знает популярные технологии, но и имел опыт работы в построении архи...',
    company: 'Grunt Gold'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    price: 1000,
    workExperience: '1 год',
    desc: 'Мы давольно известная фирма, которая давно нуждается в навыках опытного UX/UI дизайнера. Если вы увлечены эти...',
    company: 'MilkyWay'
  },
  {
    id: 4,
    title: 'Unity C# Developer',
    price: 200,
    workExperience: '3 года',
    desc: 'Ищем в команду разработчика, который умеет разрабатывать игры. Вам необходимо будет разрабатывать всё с нуля, начи...',
    company: 'TisserOff'
  }
];

export const HomePage = () => {
  return (
    <div className='container'>
      <ul className={styles.cards}>
        {array.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
