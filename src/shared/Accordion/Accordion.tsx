import { ComponentProps, ReactNode, useState } from 'react';
import { Typography } from '../Typography/Typography';
import styles from './Accordion.module.css';
import clsx from 'clsx';
import { useSorted } from '@/pages/HomePage/store';

type itemTypes = {
  component: (props: any) => ReactNode;
  params: string;
};

interface AccordionProps extends ComponentProps<'div'> {
  children: ReactNode;
  items: itemTypes[];
}

export const Accordion = ({ children, items, ...props }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const { deleteSpecialization, addSpecialization } = useSorted((state) => state);

  // const addedSort = useCallback(
  //   (params) => {
  //     deleteSpecialization(params);
  //     addSpecialization(params);
  //   },
  //   [sorted]
  // );

  return (
    <div className={styles.accord} {...props}>
      <Typography
        className={styles.title}
        onClick={() => setOpen((prev) => !prev)}
        variant='title20_medium'
      >
        {children}
      </Typography>
      <ul className={clsx(styles.list, open && styles.active)}>
        {items.map((Item, index) => (
          <li key={index}>
            {Item.component && Item.component({
              onChecked: () => addSpecialization(Item.params),
              onNotChecked: () => deleteSpecialization(Item.params)
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};
