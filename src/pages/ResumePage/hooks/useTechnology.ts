import { useEffect } from 'react';

import { useResume } from '@/global/store';

import { useTechnologyResume } from '../store/technologies';

export const useTechnology = () => {
  const resume = useResume((state) => state.resume);
  const technology = useTechnologyResume((state) => state);

  useEffect(() => {
    technology.setData(resume);
  }, [resume]);

  return { ...technology };
};
