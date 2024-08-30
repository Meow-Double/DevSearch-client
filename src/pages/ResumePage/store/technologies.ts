import { create } from 'zustand';

interface UseTechnologyTypes {
  technologies: string[];
  setData: (data: ResumeData) => void;
  addTechnologies: (skill: string) => void;
  removeTechnology: (skill: string) => void;
}

export const useTechnologyResume = create<UseTechnologyTypes>((set, get) => ({
  technologies: [],
  setData: (data) => set(() => ({ technologies: data.technologies })),
  addTechnologies: (technology: string) => {
    const findSkill = get().technologies.find((item) => item === technology);

    if (!findSkill) return set(() => ({ technologies: [...get().technologies, technology] }));
  },
  removeTechnology: (technology) =>
    set(() => ({ technologies: get().technologies.filter((item) => item !== technology) }))
}));
