import { create } from 'zustand';

interface UseGeneralResumeTypes {
  name: string;
  specialization: string;
  about: string;
  contacts: ContactTypes[];
  setData: (data: ResumeData) => void;
}

export const useGeneralResume = create<UseGeneralResumeTypes>((set) => ({
  name: '',
  specialization: '',
  about: '',
  contacts: [],
  setData: (data) => set(() => ({ ...data }))
}));
