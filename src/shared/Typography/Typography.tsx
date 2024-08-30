import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

export type TypographyTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';

export type TypographyVariant =
  | 'title16_regular'
  | 'title16_medium'
  | 'title16_bold'
  | 'title20_regular'
  | 'title20_medium'
  | 'title24_bold';

type TypographyProps<Tag extends TypographyTags> = ComponentProps<Tag> & {
  children: ReactNode;
  tag?: TypographyTags;
  variant: TypographyVariant;
};

export const Typography = <Tag extends TypographyTags = 'div'>({
  children,
  className,
  tag = 'div',
  variant,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;
  return (
    <Component className={clsx(variant, className)} {...props}>
      {children}
    </Component>
  );
};
