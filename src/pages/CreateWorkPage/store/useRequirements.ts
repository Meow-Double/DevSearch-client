import { create } from 'zustand';

interface UseRequirements {
  requirements: string[];
  addRequirements: (requirement: string) => void;
}
export const useRequirements = create<UseRequirements>((set, get) => ({
  requirements: [],
  addRequirements: (requirement) => {
    const findTechnology = get().requirements.find(
      (item) => item.toLowerCase() === requirement.toLowerCase()
    );
    if (!findTechnology) {
      set(() => ({
        requirements: [...get().requirements, requirement]
      }));
    }
  }
}));
