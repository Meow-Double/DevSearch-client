import { create } from 'zustand';

// interface UseResumeTypes {
//   resume: ResumeData;
//   setData: (data: ResumeData) => void;
//   resetData: () => void;
// }

// const initialState: ResumeData = {
//   name: '',
//   specialization: '',
//   about: '',
//   contacts: [],
//   skills: [],
//   technologies: [],
//   workExperience: []
// };

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
