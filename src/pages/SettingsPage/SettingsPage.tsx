import { Button, FileUpload, Input, Typography } from '@/shared';
import styles from './SettingsPage.module.css';
import { useUser } from '../AuthPages/store';
import { useImgFile } from '@/shared/FileUpload/store';
import { postUpdate } from '@/api/requests/upload';
import { useCallback } from 'react';

export const SettingsPage = () => {
  const { user } = useUser((state) => state);
  const { url, file } = useImgFile((state) => state);

  const onSubmit = useCallback(() => {
    const token = window.localStorage.getItem('token');
    if (file) {
      const data = new FormData();
      data.append('avatarka', file);
      postUpdate({
        params: data,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token
          }
        }
      });
    }
  }, [file]);
  return (
    <div className='container'>
      <div className={styles.inner}>
        <Typography className={styles.title} tag='h2' variant='title24_bold'>
          Настройки:
        </Typography>
        <div className={styles.info_block}>
          <div className={styles.avatarka_block}>
            <img className={styles.avatarka} src={url ? url : user?.avatarUrl} alt='avatarka' />
            <FileUpload className={styles.upload_btn} variant='default'>
              Сменить аватарку
            </FileUpload>
            <Button onClick={onSubmit} variant='primary' className={styles.btn}>
              Сохранить изменения
            </Button>
          </div>
          <div className={styles.info}>
            <Input component='input' variant='primary' label='Ваше имя' value={user?.name} />
            <div className={styles.email_block}>
              <Input component='input' variant='primary' label='Ваша почта' value={user?.email} />
              <Button className={styles.email_btn} variant='primary'>
                Сменить почту
              </Button>
            </div>
            {/* <Button variant='primary'>Сменить пароль</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
