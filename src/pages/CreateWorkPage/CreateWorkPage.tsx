import { Button, FileUpload, Input, Textarea, Typography } from '@/shared';
import styles from './CreateWorkPage.module.css';
import { useImgFile } from '@/shared/FileUpload/store';
import { useEffect } from 'react';

export const CreateWorkPage = () => {
  const { setFile, file, url } = useImgFile((state) => state);

  useEffect(() => {
    setFile(null);
  }, []);

  return (
    <div className='container'>
      <div className={styles.inner}>
        <div>
          <Typography className={styles.title} variant='title24_bold' tag='h2'>
            Опишите вакансию
          </Typography>
          <form className={styles.form}>
            <Input
              variant='primary'
              placeholder='Junior Unity Developer...'
              label='Введите название специализации'
              component='input'
            />
            <Input
              variant='primary'
              placeholder='MilkyWay...'
              label='Введите название компании'
              component='input'
            />
            <Input
              variant='primary'
              placeholder='от 1 - 3 лет...'
              label='Введите необходимый опыт работы'
              component='input'
            />
            <Input
              variant='primary'
              placeholder='300$ - 600$'
              label='Введите заработную плату'
              component='input'
            />
            <Textarea
              variant='primary'
              component='textarea'
              placeholder='Мы ищем квалифицированного специалиста...'
              label='Кого вы ищите?'
            />
            <Textarea
              variant='primary'
              component='textarea'
              placeholder='Вам предстоит разрабатывать...'
              label='Чем будет заниматься специалист?'
            />
            <Textarea
              variant='primary'
              component='textarea'
              placeholder='Наша компания направлена на ...'
              label='Опишите команию'
            />
            <div className={styles.row}>
              <Input
                variant='primary'
                placeholder='Хорошее владение ...'
                label='Укажите требования кондидата'
                component='input'
              />
              <Button className={styles.row_btn} variant='primary'>
                Добавить
              </Button>
            </div>
            <div className={styles.row}>
              <Input
                variant='primary'
                placeholder='NextJs...'
                label='Укажите технологии проекта'
                component='input'
              />
              <Button className={styles.row_btn} variant='primary'>
                Добавить
              </Button>
            </div>
          </form>
        </div>
        <div className={styles.block}>
          <div>
            <span className={styles.img_text}>*Не обязательно для заполнения</span>
            {file ? (
              <img className={styles.work_img} src={url ? url : ''} alt='background' />
            ) : (
              <div className={styles.img_empty}>Загрузите изображение</div>
            )}
            <FileUpload variant='default'>Загрузить картинку</FileUpload>
          </div>
          <Button variant='primary'>Создать вакансию</Button>
        </div>
      </div>
    </div>
  );
};
