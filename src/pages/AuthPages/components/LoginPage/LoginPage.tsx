import { Typography, Button, Input, Checkbox } from '@/shared';
import styles from '../../styles/auth.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from '../../constans/loginSchema';
import AuthImg from '@/assets/images/auth-img.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import ArrowSvg from '@/assets/svg/arrow.svg';
import { postLogin } from '@/api/requests/user/login';

export const LoginPage = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur'
  });

  const onSubmit = (values: LoginSchema) => {
    postLogin({ params: values });
  };

  return (
    <div className='container'>
      <div className={styles.inner}>
        <img className={styles.img} src={AuthImg} alt='lightning icon' />
        <div>
          <Link to='/' className={styles.back}>
            <img className={styles.arrow} src={ArrowSvg} alt='arrow' />
            <Typography variant='title16_regular' tag='h4'>
              Главная
            </Typography>
          </Link>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography className={styles.title} variant='title16_regular' tag='h2'>
              Авторизация
            </Typography>
            <div className={styles.inputs}>
              <Input
                type='email'
                variant='primary'
                component='input'
                label='Введите почту'
                placeholder='email@gmail.com...'
                {...register('email')}
                error={errors.email?.message}
              />
              <Input
                type='password'
                variant='primary'
                component='input'
                label='Введите пароль'
                placeholder='Yn8Gf11L...'
                {...register('password')}
                error={errors.password?.message}
              />
            </div>
            <div className={styles.options}>
              <Checkbox ref={checkboxRef} label='Запомнить меня' />
              <Link className={styles.link} to='/auth/register'>
                Перейти к регестрации
              </Link>
            </div>
            <Button variant='primary'>Войти в аккаунт</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
