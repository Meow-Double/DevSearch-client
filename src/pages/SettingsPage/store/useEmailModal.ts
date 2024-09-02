import { create } from 'zustand';

interface UseEmailModalParams {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

export const useEmailModal = create<UseEmailModalParams>((set) => ({
  isOpen: false,
  setIsOpen: (state) =>
    set(() => ({
      isOpen: state
    }))
}));
