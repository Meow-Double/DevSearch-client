import { create } from 'zustand';

interface UseImgFileProps {
  url: string | null;
  file: File | null;
  setUrl: (url: string | null) => void;
  setFile: (file: File | null) => void;
}

export const useImgFile = create<UseImgFileProps>((set) => ({
  url: null,
  file: null,
  setUrl: (url) => set(() => ({ url })),
  setFile: (file) => set(() => ({ file }))
}));
