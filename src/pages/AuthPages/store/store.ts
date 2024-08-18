import { create } from 'zustand';

interface UseModalTypes {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useModal = create<UseModalTypes>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}));
