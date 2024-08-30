import { useEffect } from 'react';

import { useResume } from '@/global/store';

import { useGeneralResume } from '../store/general';

export const useGeneral = () => {
  const resume = useResume((state) => state.resume);
  const general = useGeneralResume((state) => state);

  useEffect(() => {
    general.setData(resume);
  }, [resume]);

  return { ...general };
};
