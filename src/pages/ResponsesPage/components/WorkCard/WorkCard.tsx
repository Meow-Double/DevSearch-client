import { Button, Confirm, Typography } from '@/shared';
import styles from './WorkCard.module.css';
import { useState } from 'react';
import { RespondModal } from '../RespondModal/RespondModal';
import clsx from 'clsx';
import LockSvg from '@/assets/svg/lock.svg';
import { WatchingModal } from '../WatchingModal/WatchingModal';

type WorkCardProps = WatchingTypes;

export const WorkCard = ({ specialization, responded, id, watching }: WorkCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenT, setIsOpenT] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <>
      <li className={styles.card}>
        <div className={styles.title_block}>
          <Button variant='outlined'>
            <Typography tag='h2' variant='title20_medium'>
              {specialization}
            </Typography>
          </Button>
          <Button
            onClick={() => setIsConfirm(true)}
            className={styles.btn_delete}
            variant='outlined'
          >
            <img className={styles.lock_icon} src={LockSvg} alt='lock' />
          </Button>
        </div>
        <Typography tag='h3' variant='title16_medium'>
          Откликнулись: {responded.length}
        </Typography>
        {responded.length !== 0 && (
          <Button variant='outlined' onClick={() => setIsOpen(true)}>
            <ul className={styles.list}>
              {responded.map((item, index) =>
                index + 1 !== 7 ? (
                  <li key={item.id} className={styles.item}>
                    <img className={styles.avatar} src={item.avatarUrl} alt='avatar' />
                  </li>
                ) : (
                  <li key={item.id} className={clsx(styles.item_more, styles.item)}>
                    +{responded.length}
                  </li>
                )
              )}
            </ul>
          </Button>
        )}

        <Typography tag='h3' variant='title16_medium'>
          Расматриваются: {watching.length}
        </Typography>

        {watching.length !== 0 && (
          <Button variant='outlined' onClick={() => setIsOpenT(true)}>
            <ul className={styles.list}>
              {watching.map((item, index) =>
                index + 1 !== 7 ? (
                  <li key={item.id} className={styles.item}>
                    <img className={styles.avatar} src={item.avatarUrl} alt='avatar' />
                  </li>
                ) : (
                  <li key={item.id} className={clsx(styles.item_more, styles.item)}>
                    +{watching.length}
                  </li>
                )
              )}
            </ul>
          </Button>
        )}

        <Typography tag='h3' variant='title16_medium'>
          13.02.2024
        </Typography>
      </li>
      {isConfirm && (
        <Confirm successfulClick={() => {}} unSuccessfulClick={() => setIsConfirm(false)}>
          Вы уверены, что хотите закрыть вакансию?
        </Confirm>
      )}
      <RespondModal workId={id} responded={responded} isOpen={isOpen} setIsOpen={setIsOpen} watching={watching} />
      <WatchingModal watching={watching} isOpen={isOpenT} setIsOpen={setIsOpenT} workId={id}/>
    </>
  );
};
