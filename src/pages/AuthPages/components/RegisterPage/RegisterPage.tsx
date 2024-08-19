import { Typography, Checkbox, Button, Input } from '@/shared';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthImg from '@/assets/images/auth-img.png';
import { Link } from 'react-router-dom';
import styles from '../../styles/auth.module.css';
import { registerSchema, RegisterSchema } from '../../constans/registerSchema';
import ArrowSvg from '@/assets/svg/arrow.svg';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useModal } from '../../store/store';
import { postRegistration } from '@/api/requests';

export const RegisterPage = () => {
  const setIsOpen = useModal((state) => state.setIsOpen);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur'
  });

  const onSubmit = (values: RegisterSchema) => {
    const { confirmPassword, ...data } = values;
    postRegistration({ params: data });
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
              Регестрация
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
                type='text'
                variant='primary'
                component='input'
                label='Введите имя'
                placeholder='Denis...'
                {...register('name')}
                error={errors.name?.message}
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
              <Input
                type='password'
                variant='primary'
                component='input'
                label='Повторите пароль'
                placeholder='Yn8Gf11L...'
                {...register('confirmPassword')}
                error={errors.confirmPassword?.message}
              />
            </div>
            <div className={styles.options}>
              <div className={styles.checkbox_block}>
                <Checkbox />
                <Button onClick={setIsOpen} variant='outlined'>
                  Политика сайта
                </Button>
              </div>
              <Link className={styles.link} to='/auth'>
                Перейти к авторизации
              </Link>
            </div>
            <Button variant='primary'>Зарегестрировать аккаунт</Button>
          </form>
        </div>
      </div>
      <ModalWindow />
    </div>
  );
};
