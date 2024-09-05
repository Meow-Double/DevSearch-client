import { WorkCard } from '@/components';
import { Accordion, Button, Checkbox, Input } from '@/shared';
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../AuthPages/store';
import { useEffect, useState } from 'react';
import { getWorkCards } from '@/api/requests';

// const array = [
//   {
//     id: 1,
//     title: 'Front-end developer',
//     price: 700,
//     workExperience: '0 лет',
//     desc: 'Ищем в команду разработчика веб сайтов. Нам очень важно, что бы у вас был опыт работы с такими инструментами, как react, redux, typescript, css, html, jest, nodejs, express, mongo db',
//     company: 'HCJ Studio'
//   },
//   {
//     id: 2,
//     title: 'Backend NodeJs Middle',
//     price: 1200,
//     workExperience: '2-3 года',
//     desc: 'Срочно нужен Бэкендер, который не только знает популярные технологии, но и имел опыт работы в построении архи...',
//     company: 'Grunt Gold'
//   },
//   {
//     id: 3,
//     title: 'UX/UI Designer',
//     price: 1000,
//     workExperience: '1 год',
//     desc: 'Мы давольно известная фирма, которая давно нуждается в навыках опытного UX/UI дизайнера. Если вы увлечены эти...',
//     company: 'MilkyWay'
//   },
//   {
//     id: 4,
//     title: 'Unity C# Developer',
//     price: 200,
//     workExperience: '3 года',
//     desc: 'Ищем в команду разработчика, который умеет разрабатывать игры. Вам необходимо будет разрабатывать всё с нуля, начи...',
//     company: 'TisserOff'
//   }
// ];

// const Tags = [
//   'React',
//   'nodejs',
//   'html',
//   'css',
//   'typescript',
//   'ts',
//   'express',
//   'next',
//   'nest',
//   'jest',
//   'vitest',
//   'react-router-dom',
//   'tanstackQuery',
//   'rtk query',
//   'graphql',
//   'websockets'
// ];

const specializationsItems = [
  <Checkbox label='Front-End' />,
  <Checkbox label='Backend-End' />,
  <Checkbox label='Unity (C#) Developer' />,
  <Checkbox label='Game Developer' />,
  <Checkbox label='Devops' />,
  <Checkbox label='SRE' />,
  <Checkbox label='UX/UI Design' />,
  <Checkbox label='Game Design' />,
  <Checkbox label='Another...' />
];

const workExperienceItems = [
  <Checkbox label='Менее 1 года' />,
  <Checkbox label='Примерно 1 год' />,
  <Checkbox label='Менее 3 года' />,
  <Checkbox label='Примерно 3 года' />,
  <Checkbox label='Более 3 лет' />,
  <Checkbox label='Более 6 лет' />
];

export const HomePage = () => {
  const isAuth = useUser((state) => state.isAuth);
  const navigate = useNavigate();

  const [items, setItems] = useState<WorkCardsType>([]);
  // const [store, setStore] = useState([]);

  // const [inputMin, setInputMin] = useState(0);
  // const [inputMax, setInputMax] = useState(6000);

  const onCreateWork = () => {
    if (!isAuth) {
      return navigate('/auth');
    }
    navigate('/create-work');
  };

  useEffect(() => {
    getWorkCards({}).then((res) => setItems(res.data));
  }, []);

  return (
    <div className='container'>
      <div className={styles.inner}>
        <div>
          <div className={styles.search}>
            <Input component='input' variant='primary' placeholder='Введите название' />
            <Button variant='primary'>Найти</Button>
          </div>
          {/* <div className={styles.tags}>
            {Tags.map((tag) => (
              <Tag key={tag} variant='work'>
                {tag}
              </Tag>
            ))}
          </div> */}
          <ul className={styles.cards}>
            {items.map((item) => (
              <WorkCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.items}>
            <Accordion items={workExperienceItems}>Опыт работы</Accordion>
            <Accordion items={specializationsItems}>Специализации</Accordion>

            <div className={styles.price}>
              <Input
                component='input'
                variant='primary'
                placeholder='от 1$...'
                label='Введите сумму от ($)'
              />
              <Input
                component='input'
                variant='primary'
                placeholder='до 900$...'
                label='Введите сумму до ($)'
              />
            </div>
            <Button variant='primary'>Применить фильтры</Button>
            {/* <DoubleRange
              inputFrom={inputMin}
              setInputFrom={setInputMin}
              inputTo={inputMax}
              setInputTo={setInputMax}
            /> */}

            {/* <Checkbox label='hello'/> */}
            <Button variant='primary' onClick={onCreateWork}>
              Создать вакансию
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Судя по тебе, ты 100% учишься. Надеюсь не в школе?
