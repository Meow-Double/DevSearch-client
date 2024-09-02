import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { UpdateEmailSchema, updateEmailSchema } from '../../constans';
import { useEmailModal } from '../../store';
import styles from './EmailModal.module.css';
import { Button, Input, Modal } from '@/shared';
import { postUpdateEmail } from '@/api/requests/user/updateEmail';

export const EmailModal = () => {
  const { isOpen, setIsOpen } = useEmailModal((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateEmailSchema>({
    resolver: zodResolver(updateEmailSchema)
  });

  const onSubmit = (values: UpdateEmailSchema) => {
    const token = window.localStorage.getItem('token');
    postUpdateEmail({ params: values, config: { headers: { Authorization: token } } });
    setIsOpen(false);
  };
  return (
    isOpen && (
      <Modal className={styles.modal} onClick={() => setIsOpen(false)}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='email'
            variant='primary'
            component='input'
            label='Укажите новую почту'
            placeholder='NewEmail@gmail.com...'
            {...register('newEmail')}
            error={errors.newEmail?.message}
          />
          <Input
            type='password'
            variant='primary'
            component='input'
            label='Укажите пароль'
            placeholder='Uj24df1prf4...'
            {...register('password')}
            error={errors.password?.message}
          />
          <Button variant='primary'>Сменить</Button>
        </form>
      </Modal>
    )
  );
};
