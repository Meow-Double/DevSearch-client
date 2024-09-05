import { Button, FileUpload, Input, Textarea, Typography } from '@/shared';
import styles from './CreateWorkPage.module.css';
import { useState } from 'react';
import { useTechnologies } from './store';
import { Tag } from '../ResumePage/components';
import { useRequirements } from './store/useRequirements';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { WorkSchema, workSchema } from './constans/workSchema';
import { postCreateWork } from '@/api/requests';
import { postUploadImg } from '@/api/requests';
import { useImgFile } from './store/useImgFile';

export const CreateWorkPage = () => {
  const { setFile, file, url, setUrl } = useImgFile((state) => state);
  const [technologyValue, setTechnologyValue] = useState('');
  const [requirementsValue, setRequirementsValue] = useState('');
  const { AddTechnologies, technologies } = useTechnologies((state) => state);
  const { addRequirements, requirements } = useRequirements((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<WorkSchema>({
    resolver: zodResolver(workSchema)
  });

  const onSubmit = async (values: WorkSchema) => {
    let backgroundImg = '';

    if (file) {
      const imgData = new FormData();
      imgData.append('work-bg', file);

      const { data } = await postUploadImg({
        params: imgData,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      });

      backgroundImg = 'http://localhost:8080/' + data.path;
    }
    const token = window.localStorage.getItem('token');
    const params = {
      ...values,
      technologies,
      requirements,
      backgroundImg
    };

    postCreateWork({
      params,
      config: { headers: { Authorization: token } }
    });
  };

  return (
    <div className='container'>
      <div className={styles.inner}>
        <div>
          <Typography className={styles.title} variant='title24_bold' tag='h2'>
            Опишите вакансию
          </Typography>
          <form id='workForm' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              variant='primary'
              placeholder='Junior Unity Developer...'
              label='Введите название специализации'
              component='input'
              {...register('specialization')}
              error={errors.specialization?.message}
            />
            <Input
              variant='primary'
              placeholder='MilkyWay...'
              label='Введите название компании'
              component='input'
              {...register('company_name')}
              error={errors.company_name?.message}
            />
            <Input
              variant='primary'
              placeholder='от 1 - 3 лет...'
              label='Введите необходимый опыт работы'
              component='input'
              {...register('workExperience')}
              error={errors.workExperience?.message}
            />
            <Input
              variant='primary'
              placeholder='300$ - 600$'
              label='Введите заработную плату'
              component='input'
              {...register('paycheck')}
              error={errors.paycheck?.message}
            />
            <Textarea
              variant='primary'
              component='textarea'
              placeholder='Мы ищем квалифицированного специалиста...'
              label='Кого вы ищите?'
              {...register('specialization_desc')}
              error={errors.specialization_desc?.message}
            />
            <Textarea
              variant='primary'
              component='textarea'
              placeholder='Вам предстоит разрабатывать...'
              label='Чем будет заниматься специалист?'
              {...register('job_desc')}
              error={errors.company_name?.message}
            />
            <Textarea
              variant='primary'
              component='textarea'
              placeholder='Наша компания направлена на ...'
              label='Опишите команию'
              {...register('desc')}
              error={errors.company_name?.message}
            />
            <div className={styles.row}>
              <Input
                variant='primary'
                placeholder='Хорошее владение ...'
                label='Укажите требования кондидата'
                component='input'
                value={requirementsValue}
                onChange={(e) => setRequirementsValue(e.target.value)}
              />
              <Button
                type='button'
                className={styles.row_btn}
                variant='primary'
                onClick={() => addRequirements(requirementsValue)}
              >
                Добавить
              </Button>
            </div>
            <div className={styles.row}>
              <Input
                variant='primary'
                placeholder='NextJs...'
                label='Укажите технологии проекта'
                component='input'
                value={technologyValue}
                onChange={(e) => setTechnologyValue(e.target.value)}
              />
              <Button
                type='button'
                onClick={() => AddTechnologies(technologyValue)}
                className={styles.row_btn}
                variant='primary'
              >
                Добавить
              </Button>
            </div>
          </form>
          <ul className={styles.technologies}>
            {technologies.map((technology) => (
              <li key={technology}>
                <Tag>{technology}</Tag>
              </li>
            ))}
          </ul>
          <ul className={styles.technologies}>
            {requirements.map((requirement) => (
              <li key={requirement}>
                <Tag>{requirement}</Tag>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.block}>
          <div>
            <span className={styles.img_text}>*Не обязательно для заполнения</span>
            {file ? (
              <img className={styles.work_img} src={url ? url : ''} alt='background' />
            ) : (
              <div className={styles.img_empty}>Загрузите изображение</div>
            )}
            <FileUpload setFile={setFile} setUrl={setUrl} variant='default'>
              Загрузить картинку
            </FileUpload>
          </div>
          <Button form='workForm' type='submit' variant='primary'>
            Создать вакансию
          </Button>
        </div>
      </div>
    </div>
  );
};
