import { create } from 'zustand';

interface UseResumeTypes {
  resume: ResumeData;
  setData: (data: ResumeData) => void;
  resetData: () => void;
}

const initialState: ResumeData = {
  name: '',
  specialization: '',
  about: '',
  contacts: [],
  skills: [],
  technologies: [],
  workExperience: []
};

export const useResume = create<UseResumeTypes>((set) => ({
  resume: initialState,
  setData: (data) => {
    if (data) {
      set(() => ({ resume: { ...data } }));
    } else {
      set(() => ({ resume: initialState }));
    }
  },
  resetData: () => set(() => ({ resume: initialState }))
}));
