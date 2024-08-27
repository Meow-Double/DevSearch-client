import { create } from 'zustand';

interface UseSkillsTypes {
  skills: string[];
  addSkill: (skill: string) => void;
}

export const useSkills = create<UseSkillsTypes>((set, get) => ({
  skills: [],
  addSkill: (skill: string) => {
    const findSkill = get().skills.find((item) => item === skill);

    if (!findSkill) return set(() => ({ skills: [...get().skills, skill] }));
  }
}));
