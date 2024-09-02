import { Button, Input, Modal } from '@/shared';
import styles from './PasswordModal.module.css';
import { usePasswordModal } from '../../store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdatePasswordSchema, updatePasswordSchema } from '../../constans';
import { postUpdatePassword } from '@/api/requests';

export const PasswordModal = () => {
  const { isOpen, setIsOpen } = usePasswordModal((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdatePasswordSchema>({
    resolver: zodResolver(updatePasswordSchema),
    mode: 'onBlur'
  });

  const onSubmit = (values: UpdatePasswordSchema) => {
    const { confirmPassword, ...other } = values;
    const token = window.localStorage.getItem('token');
    postUpdatePassword({ params: other, config: { headers: { Authorization: token } } });
    setIsOpen(false);
  };
  return (
    isOpen && (
      <Modal className={styles.modal} onClick={() => setIsOpen(false)}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='password'
            variant='primary'
            component='input'
            label='Укажите старый пароль'
            placeholder='Yk89c13d5...'
            {...register('oldPassword')}
            error={errors.oldPassword?.message}
          />
          <Input
            type='password'
            variant='primary'
            component='input'
            label='Укажите новый пароль'
            placeholder='Uj24df1prf4...'
            {...register('newPassword')}
            error={errors.newPassword?.message}
          />
          <Input
            type='password'
            variant='primary'
            component='input'
            label='Повторите пароль'
            placeholder='Uj24df1prf4...'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <Button variant='primary'>Сменить</Button>
        </form>
      </Modal>
    )
  );
};
