import { Button, FileUpload, Input, Typography } from '@/shared';
import styles from './SettingsPage.module.css';
import { useUser } from '../AuthPages/store';
import { useImgFile } from '@/shared/FileUpload/store';
import { postUpload } from '@/api/requests';
import { useCallback } from 'react';
import { useEmailModal, usePasswordModal } from './store';
import { PasswordModal } from './components';
import { EmailModal } from './components/EmailModal/EmailModal';
import ArrowSvg from '@/assets/svg/arrow.svg';
import { Link } from 'react-router-dom';

export const SettingsPage = () => {
  const { user } = useUser((state) => state);
  const { url, file } = useImgFile((state) => state);
  const setIsOpenPassword = usePasswordModal((state) => state.setIsOpen);
  const setIsOpenEmail = useEmailModal((state) => state.setIsOpen);

  const onSubmit = useCallback(() => {
    const token = window.localStorage.getItem('token');
    if (file) {
      const data = new FormData();
      data.append('avatarka', file);

      postUpload({
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
    <>
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
              <Link to='/' className={styles.link_back}>
                <p>Главная</p> <img className={styles.arrow} src={ArrowSvg} alt='arrow' />
              </Link>
              <Input component='input' variant='primary' label='Ваше имя' value={user?.name} />
              <div className={styles.email_block}>
                <Input component='input' variant='primary' label='Ваша почта' value={user?.email} />
                <Button
                  onClick={() => setIsOpenEmail(true)}
                  className={styles.email_btn}
                  variant='primary'
                >
                  Сменить почту
                </Button>
              </div>
              <Button
                className={styles.btn_password}
                variant='primary'
                onClick={() => setIsOpenPassword(true)}
              >
                Сменить пароль
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PasswordModal />
      <EmailModal />
    </>
  );
};
