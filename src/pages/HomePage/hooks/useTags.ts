import { useSorted } from '../store';

export const useTags = () => {
  const { sorted } = useSorted((state) => state);

  //   const tags = sorted.specializations;

  if (sorted) {
    return [...sorted.specialization];
  }

  return [];
};
