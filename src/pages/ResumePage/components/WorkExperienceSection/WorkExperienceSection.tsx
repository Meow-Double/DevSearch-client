import { Button, Input, Textarea, Typography } from '@/shared';
import styles from './WorkExperienceSection.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { WorkExperienceSchema, workExperienceSchema } from '../../constanc/WorkExperienceSchema';
import { WorkExperienceData } from '@/components';
import { postUpdateResume } from '@/api/requests';
import { useWork } from '../../hooks/useWork';

export const WorkExperienceSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<WorkExperienceSchema>({
    resolver: zodResolver(workExperienceSchema),
    mode: 'onBlur'
  });

  const { workExperience, addWorkExperience } = useWork();

  const onSubmit = (values: WorkExperienceSchema) => {
    addWorkExperience(values);
  };

  const updateWorkExperience = () => {
    const token = window.localStorage.getItem('token');
    postUpdateResume({ params: { workExperience }, config: { headers: { Authorization: token } } });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Button className={styles.btn} variant='primary' type='button' onClick={updateWorkExperience}>
        Сохранить
      </Button>
      <Typography variant='title20_medium' tag='h3'>
        Опыт работы
      </Typography>
      <Input
        variant='primary'
        component='input'
        label='Название компании'
        placeholder='MilkyWay...'
        {...register('company_name')}
        error={errors.company_name?.message}
      />
      <Input
        variant='primary'
        component='input'
        label='Кем вы работали?'
        placeholder='Разработчиком...'
        {...register('specialization')}
        error={errors.company_name?.message}
      />
      <div className={styles.row}>
        <Input
          type='number'
          variant='primary'
          component='input'
          label='количество лет'
          placeholder='2 года...'
          {...register('years')}
          error={errors.years?.message}
        />
        <Input
          type='number'
          variant='primary'
          component='input'
          label='количество месяцев'
          placeholder='3 месяца...'
          {...register('months')}
          error={errors.months?.message}
        />
      </div>
      <Textarea
        label='описание деятельности...'
        variant='primary'
        component='textarea'
        placeholder='Разрабатывал ...'
        {...register('desc')}
        error={errors.desc?.message}
      />
      <Button variant='primary' type='submit'>
        Добавить информацию
      </Button>
      <ul className={styles.work_experience}>
        {workExperience?.map((item, index) => <WorkExperienceData key={index} {...item} />)}
      </ul>
    </form>
  );
};
