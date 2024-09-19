import { WorkCard } from '@/components';
import { Accordion, Button, Checkbox, Input, Tag } from '@/shared';
import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { getWorkCards } from '@/api/requests';
import { useSorted } from './store';
import { useTags } from './hooks';

const specializationsItems = [
  {
    params: 'frontend',
    component: (props: any) => <Checkbox label='Front-End' {...props} />
  },
  {
    params: 'backend',
    component: (props: any) => <Checkbox label='Back-End' {...props} />
  },
  {
    params: 'unity',
    component: (props: any) => <Checkbox label='Unity (C#) Developer' {...props} />
  },
  {
    params: 'devops',
    component: (props: any) => <Checkbox label='Devops' {...props} />
  },
  {
    params: 'sre',
    component: (props: any) => <Checkbox label='SRE' {...props} />
  },
  {
    params: 'ux-design',
    component: (props: any) => <Checkbox label='UX/UI Design' {...props} />
  },
  {
    params: 'game-design',
    component: (props: any) => <Checkbox label='Game Design' {...props} />
  },
  {
    params: 'another',
    component: (props: any) => <Checkbox label='Another...' {...props} />
  }
  // <Checkbox label='Back-End' />,
  // <Checkbox label='Unity (C#) Developer' />,
  // <Checkbox label='Game Developer' />,
  // <Checkbox label='Devops' />,
  // <Checkbox label='SRE' />,
  // <Checkbox label='UX/UI Design' />,
  // <Checkbox label='Game Design' />,
  // <Checkbox label='Another...' />
];

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState<WorkCardsType>([]);
  const { sorted } = useSorted((state) => state);
  const tags = useTags();

  useEffect(() => {
    getWorkCards({}).then((res) => setItems(res.data));
  }, []);

  const getWorksWithParams = async () => {
    const urlParams = {
      specialization: sorted.specialization.join(','),
      text: searchValue
    };
    const queryString = sorted && new URLSearchParams(urlParams);

    await getWorkCards({ config: { params: queryString } }).then((res) => setItems(res.data));
  };

  return (
    <div className='container'>
      <div className={styles.inner}>
        <div>
          <div className={styles.search}>
            <Input
              component='input'
              variant='primary'
              placeholder='Введите название'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button variant='primary' onClick={getWorksWithParams}>
              Найти
            </Button>
          </div>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag} variant='work'>
                {tag}
              </Tag>
            ))}
          </div>
          <ul className={styles.cards}>
            {items.map((item) => (
              <WorkCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.items}>
            {/* <Accordion items={workExperienceItems}>Опыт работы</Accordion> */}
            <Accordion items={specializationsItems}>Специализации</Accordion>
            {/* 
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
            </div> */}
            {/* <Button variant='primary' >
              Применить фильтры
            </Button> */}
            {/* <DoubleRange
              inputFrom={inputMin}
              setInputFrom={setInputMin}
              inputTo={inputMax}
              setInputTo={setInputMax}
            /> */}

            {/* <Checkbox label='hello'/> */}
          </div>
        </div>
      </div>
    </div>
  );
};
