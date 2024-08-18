import { Modal, Typography } from '@/shared';
import { useModal } from '../../store/store';
import styles from './ModalWindow.module.css';

export const ModalWindow = () => {
  const { isOpen, setIsOpen } = useModal((state) => state);

  return (
    isOpen && (
      <Modal onClick={setIsOpen}>
        <Typography variant='title24_bold' tag='h2' className={styles.title}>
          Политика конфиденциальности и использования контента
        </Typography>
        <div className={styles.content}>
          <Typography variant='title16_regular' tag='p'>
            Авторские права и интеллектуальная собственность: Все материалы на сайте, включая текст,
            изображения, дизайн и исходный код, являются интеллектуальной DevSearch.
            Пользователям запрещено копировать, воспроизводить, распространять или использовать
            любой контент с сайта без явного разрешения.
          </Typography>
          <Typography variant='title16_regular' tag='p'>
            Использование контента: Пользователи могут использовать контент с сайта только в личных,
            некоммерческих целях. Любое коммерческое использование, включая перепечатку, продажу или
            распространение, требует предварительного согласия.
          </Typography>
          <Typography variant='title16_regular' tag='p'>
            Исходный код и идеи: Пользователям запрещено копировать исходный код сайта, его
            алгоритмы или дизайн. Идеи, представленные на сайте, также являются
            собственностью DungeonsFight и не могут быть использованы без разрешения.
          </Typography>
          <Typography variant='title16_regular' tag='p'>
            Согласие: При использовании сайта вы автоматически соглашаетесь с нашей политикой
            конфиденциальности и использования контента.
          </Typography>
        </div>
      </Modal>
    )
  );
};
