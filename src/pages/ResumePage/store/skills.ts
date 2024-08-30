import { create } from 'zustand';

interface UseSkillsTypes {
  skills: string[];
  setData: (data: ResumeData) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

export const useSkillsResume = create<UseSkillsTypes>((set, get) => ({
  skills: [],
  setData: (data) => set(() => ({ skills: data.skills })),
  addSkill: (skill) => {
    const findSkill = get().skills.find((item) => item === skill);

    if (!findSkill) return set(() => ({ skills: [...get().skills, skill] }));
  },
  removeSkill: (skill) => set(() => ({ skills: get().skills.filter((item) => item !== skill) }))
}));
