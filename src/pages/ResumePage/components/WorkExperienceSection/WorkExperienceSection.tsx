import { Button, Input, Textarea, Typography } from '@/shared';
import styles from './WorkExperienceSection.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { WorkExperienceSchema, workExperienceSchema } from '../../constanc/WorkExperienceSchema';
import { useWorkExperience } from '../../store/workExperience';
import { WorkExperienceData } from '@/components';

export const WorkExperienceSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<WorkExperienceSchema>({
    resolver: zodResolver(workExperienceSchema),
    mode: 'onBlur'
  });

  const { workExperience, addWorkExperience } = useWorkExperience((state) => state);

  const onSubmit = (values: WorkExperienceSchema) => {
    addWorkExperience(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Button className={styles.btn} variant='primary' type='button'>
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
        {workExperience.map((item, index) => (
          <WorkExperienceData key={index} {...item} />
        ))}
      </ul>
    </form>
  );
};
