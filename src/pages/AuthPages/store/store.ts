import { create } from 'zustand';

interface UseModalTypes {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useModal = create<UseModalTypes>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}));

interface UseUserTypes {
  user: UserAnswerData | null;
  isAuth: boolean;
  setUser: (values: UserAnswerData) => void;
  setIsAuth: (prev: boolean) => void;
}

export const useUser = create<UseUserTypes>((set) => ({
  user: null,
  isAuth: false,
  setUser: (values) => set(() => ({ user: values })),
  setIsAuth: (prev) => set(() => ({ isAuth: prev }))
}));
