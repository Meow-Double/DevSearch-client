import { create } from 'zustand';

interface UseSortedTypes {
  sorted: SortedTypes;
  // addedSortItem: (item: any) => void;
  addSpecialization: (item: string) => void;
  deleteSpecialization: (item: string) => void;
}

type SortedTypes = {
  specialization: string[];
  // text: string;
  // years: number;
  // fromPrice: number;
  // toPrice: number;
};

export const useSorted = create<UseSortedTypes>((set, get) => ({
  sorted: {
    specialization: []
  },
  // addedSortItem: (item) => set(() => ({ sorted: { ...get()?.sorted, ...item } })),
  addSpecialization: (item) =>
    set(() => {
      const specialization = get()?.sorted.specialization;

      if (!specialization.includes(item)) {
        return {
          sorted: {
            ...get()?.sorted,
            specialization: [...specialization, item]
          }
        };
      }

      return { sorted: get()?.sorted };
    }),
  deleteSpecialization: (specialization) =>
    set(() => {
      const filteredItems = get().sorted.specialization.filter((item) => item !== specialization);
      return {
        sorted: {
          ...get()?.sorted,
          specialization: filteredItems
        }
      };
    })
}));
