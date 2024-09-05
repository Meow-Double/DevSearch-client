import { create } from 'zustand';

interface UseTechnologies {
  technologies: string[];
  AddTechnologies: (technology: string) => void;
}
export const useTechnologies = create<UseTechnologies>((set, get) => ({
  technologies: [],
  AddTechnologies: (technology) => {
    const findTechnology = get().technologies.find(
      (item) => item.toLowerCase() === technology.toLowerCase()
    );
    if (!findTechnology) {
      set(() => ({
        technologies: [...get().technologies, technology]
      }));
    }
  }
}));
