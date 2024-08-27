import { Button, Input, Typography } from '@/shared';
import styles from './SkillsSection.module.css';
import { useSkills } from '../../store/skills';
import { Tag } from '../Tag/Tag';
import { useState } from 'react';
import { useTechnology } from '../../store/technologies';

export const SkillsSection = () => {
  const { addSkill, skills } = useSkills((state) => state);
  const { addTechnologies, technologies} = useTechnology((state) => state);

  const [skillValue, setSkillValue] = useState('');
  const [technologyValue, setTechnologyValue] = useState('');
  return (
    <form className={styles.form}>
      <Button className={styles.btn} variant='primary' type='button'>
        Сохранить
      </Button>
      <Typography variant='title20_medium' tag='h3'>
        Ваши технологии
      </Typography>
      <div className={styles.row}>
        <Input
          variant='primary'
          component='input'
          label='Название технологии'
          placeholder='JavaScript...'
          value={technologyValue}
          onChange={(e) => setTechnologyValue(e.target.value)}
          //   {...register('company_name')}
          //   error={errors.company_name?.message}
        />
        <Button variant='primary' type='button' onClick={() => addTechnologies(technologyValue)}>
          Добавить технологию
        </Button>
      </div>
      <ul className={styles.technologies}>
        {technologies.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
      <Typography variant='title20_medium' tag='h3'>
        Ваши навыки
      </Typography>
      <div className={styles.row}>
        <Input
          variant='primary'
          component='input'
          label='Название навыка'
          placeholder='Английский язык - B1...'
          value={skillValue}
          onChange={(e) => setSkillValue(e.target.value)}
          //   {...register('company_name')}
          //   error={errors.company_name?.message}
        />
        <Button variant='primary' type='button' onClick={() => addSkill(skillValue)}>
          Добавить навык
        </Button>
      </div>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
      
    </form>
  );
};
