import { create } from 'zustand';

interface UseTechnologyTypes {
  technologies: string[];
  addTechnologies: (skill: string) => void;
}

export const useTechnology = create<UseTechnologyTypes>((set, get) => ({
  technologies: [],
  addTechnologies: (technology: string) => {
    const findSkill = get().technologies.find((item) => item === technology);

    if (!findSkill) return set(() => ({ technologies: [...get().technologies, technology] }));
  }
}));
