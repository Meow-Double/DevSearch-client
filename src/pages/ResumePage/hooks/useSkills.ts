import { useEffect } from 'react';

import { useResume } from '@/global/store';

import { useSkillsResume } from '../store/skills';

export const useSkills = () => {
  const resume = useResume((state) => state.resume);
  const skills = useSkillsResume((state) => state);

  useEffect(() => {
    skills.setData(resume);
  }, [resume]);

  return { ...skills };
};
