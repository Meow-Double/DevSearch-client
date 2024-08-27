import { Button, Input, Textarea, Typography } from '@/shared';
import styles from './GeneralSection.module.css';
import { useForm } from 'react-hook-form';
import { Tag } from '../Tag/Tag';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { GeneralSchema, generalSchema } from '../../constanc/GeneralSchema';
import { useGeneralResume } from '../../store/general';
import { patchGeneralResume } from '@/api/requests/resume/general/id';

export const GeneralSection = () => {
  // const { addContacts, contacts, removeContacts } = useContactsResume((state) => state);

  const [value, setValue] = useState('');
  const [link, setLink] = useState('');
  const { about, name, specialization, contacts, addContact, removeContact } = useGeneralResume(
    (state) => state
  );

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<GeneralSchema>({
    resolver: zodResolver(generalSchema),
    mode: 'onBlur',
    values: {
      name,
      about,
      specialization
    }
  });

  const addNewContact = () => {
    if (value && link) {
      addContact({ name: value, path: link });
    }
  };

  const onSubmit = (values: GeneralSchema) => {
    const allValues = {
      ...values,
      contacts
    };
    patchGeneralResume({ params: { id: 'test', ...allValues } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Button type='submit' variant='primary' className={styles.btn}>
        Сохранить
      </Button>
      <Typography className={styles.title} variant='title20_medium' tag='h3'>
        Персональные данные
      </Typography>
      <Input
        variant='primary'
        component='input'
        label='ФИО'
        placeholder='Иван...'
        {...register('name')}
        error={errors.name?.message}
      />
      <Input
        variant='primary'
        component='input'
        label='Специализация'
        placeholder='Backend developer...'
        {...register('specialization')}
        error={errors.specialization?.message}
      />
      <Textarea
        variant='primary'
        component='textarea'
        label='О себе'
        placeholder='Родился в ...'
        {...register('about')}
        error={errors.about?.message}
      />
      <Typography className={styles.contacts_title} variant='title20_medium' tag='h4'>
        Контакты
      </Typography>
      <Input
        variant='primary'
        component='input'
        label='Название контакта'
        placeholder='Loc...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Input
        variant='primary'
        component='input'
        label='Ссылка на контакт'
        placeholder='https://loc...'
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <Button type='button' onClick={addNewContact} variant='primary'>
        Добавить
      </Button>

      <ul className={styles.contacts_list}>
        {contacts.map((contact) => (
          <li key={contact.name}>
            <Tag onClick={() => removeContact(contact)} link={contact.path}>
              {contact.name}
            </Tag>
          </li>
        ))}
      </ul>
    </form>
  );
};
