import { create } from 'zustand';

interface UseResumeTypes {
  resume: ResumeData;
  setData: (data: ResumeData) => void;
}

export const useResume = create<UseResumeTypes>((set) => ({
  resume: {
    name: '',
    specialization: '',
    about: '',
    contacts: [],
    skills: [],
    technologies: [],
    workExperience: []
  },

  setData: (data) => set(() => ({ resume: { ...data } }))
}));
