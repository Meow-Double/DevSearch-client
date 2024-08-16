import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';
import styles from './LogoTitle.module.css';
import { Typography, TypographyTags, TypographyVariant } from '../Typography/Typography';

type LogoTitleExcludeTags = 'div' | 'p';

type LogoTitleTags = Exclude<TypographyTags, LogoTitleExcludeTags>;

type LogoTitleVariant = TypographyVariant;

type LogoTitleProps<Tag extends LogoTitleTags> = ComponentProps<Tag> & {
  children: ReactNode;
  text: string;
  tag?: LogoTitleTags;
  variant?: LogoTitleVariant;
};

export const LogoTitle = <Tag extends LogoTitleTags = 'h2'>({
  children,
  text,
  className,
  tag = 'h2',
  variant = 'title24_bold',
  ...props
}: LogoTitleProps<Tag>) => {
  return (
    <Typography
      className={clsx(styles.title, className)}
      tag={tag}
      variant='title16_regular'
      {...props}
    >
      <span className={styles.text}>{text}</span>
      <span className={styles.children}>{children}</span>
    </Typography>
  );
};
