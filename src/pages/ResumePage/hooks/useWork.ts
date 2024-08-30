import { useEffect } from 'react';

import { useResume } from '@/global/store';

import { useWorkExperience } from '../store/workExperience';

export const useWork = () => {
  const resume = useResume((state) => state.resume);
  const work = useWorkExperience((state) => state);

  useEffect(() => {
    work.setData(resume);
  }, [resume]);

  return { ...work };
};
