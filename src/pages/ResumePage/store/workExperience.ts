import { create } from 'zustand';

interface UseWorkExperienceTypes {
  workExperience: WorkExperienceTypes[];
  setData: (data: ResumeData) => void;
  setWork: (data: WorkExperienceTypes[]) => void;
  addWorkExperience: (data: WorkExperienceTypes) => void;
}

export const useWorkExperience = create<UseWorkExperienceTypes>((set, get) => ({
  workExperience: [],
  setData: (data) => set(() => ({ workExperience: data.workExperience })),
  setWork: (data: WorkExperienceTypes[]) =>
    set(() => ({
      workExperience: data
    })),
  addWorkExperience: (data: WorkExperienceTypes) =>
    set(() => ({ workExperience: [...get().workExperience, data] }))
}));
