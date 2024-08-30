import { Button, Input, Typography } from '@/shared';
import styles from './SkillsSection.module.css';
import { Tag } from '../Tag/Tag';
import { useState } from 'react';
import { useSkills } from '../../hooks/useSkills';
import { useTechnology } from '../../hooks/useTechnology';
import { postUpdateResume } from '@/api/requests/resume/update';
import { useGeneralResume } from '../../store/general';

export const SkillsSection = () => {
  const { addSkill, skills, removeSkill } = useSkills();
  const { addTechnologies, technologies, removeTechnology } = useTechnology();
  const name = useGeneralResume((state) => state.name);

  const [skillValue, setSkillValue] = useState('');
  const [technologyValue, setTechnologyValue] = useState('');

  const updateSkills = () => {
    if (name) {
      const token = window.localStorage.getItem('token');
      postUpdateResume({
        params: { skills, technologies },
        config: { headers: { Authorization: token } }
      });
    }
  };

  return (
    <form className={styles.form}>
      <Button onClick={updateSkills} className={styles.btn} variant='primary' type='button'>
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
        />
        <Button variant='primary' type='button' onClick={() => addTechnologies(technologyValue)}>
          Добавить технологию
        </Button>
      </div>
      <ul className={styles.technologies}>
        {technologies?.map((technology) => (
          <li key={technology}>
            <Tag onClick={() => removeTechnology(technology)}>{technology}</Tag>
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
        />
        <Button variant='primary' type='button' onClick={() => addSkill(skillValue)}>
          Добавить навык
        </Button>
      </div>
      <ul className={styles.skills}>
        {skills?.map((skill) => (
          <li key={skill}>
            <Tag onClick={() => removeSkill(skill)}>{skill}</Tag>
          </li>
        ))}
      </ul>
    </form>
  );
};
