import { create } from 'zustand';

interface UsePasswordModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

export const usePasswordModal = create<UsePasswordModalProps>((set) => ({
  isOpen: false,
  setIsOpen: (state) =>
    set(() => ({
      isOpen: state
    }))
}));
