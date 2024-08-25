import { Button, Input, Textarea, Typography } from '@/shared';
import styles from './GeneralSection.module.css';
import { useForm } from 'react-hook-form';
import { Tag } from '../Tag/Tag';
import { useContactsResume } from '../../store/contacts';
import { useState } from 'react';

export const GeneralSection = () => {
  const { addContacts, contacts, removeContacts } = useContactsResume((state) => state);

  const [value, setValue] = useState("");
  const [link, setLink] = useState("");

  const { register } = useForm();

  const addNewContact = () => {
    if (value && link) {
      addContacts({ name: value, link });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <Typography className={styles.title} variant='title20_medium' tag='h3'>
          Персональные данные
        </Typography>
        <Input
          variant='primary'
          component='input'
          label='ФИО'
          placeholder='Иван...'
          {...register('name')}
        />
        <Input
          variant='primary'
          component='input'
          label='Специализация'
          placeholder='Backend developer...'
          {...register('specialization')}
        />
        <Textarea
          variant='primary'
          component='textarea'
          label='О себе'
          placeholder='Родился в ...'
          {...register('about')}
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
        <Button onClick={addNewContact} variant='primary'>
          Добавить
        </Button>

        <ul className={styles.contacts_list}>
          {contacts.map((contact) => (
            <li key={contact.name}>
              <Tag link={contact.link} onClick={() => removeContacts(contact)}>
                {contact.name}
              </Tag>
            </li>
          ))}
        </ul>
      </div>
      <Button variant='primary' className={styles.btn}>
        Сохранить
      </Button>
    </div>
  );
};
