import { create } from 'zustand';

type WorkExperienceType = {
  company_name: string;
  desc: string;
  years: number;
  months: number;
};

interface UseWorkExperienceTypes {
  workExperience: WorkExperienceType[];
  addWorkExperience: (data: WorkExperienceType) => void;
}

export const useWorkExperience = create<UseWorkExperienceTypes>((set, get) => ({
  workExperience: [],
  addWorkExperience: (data: WorkExperienceType) =>
    set(() => ({ workExperience: [...get().workExperience, data] }))

  //   addContacts: (contact) => {
  //     const isFind = get().contacts.find((item) => item.link === contact.link);
  //     if (!isFind) {
  //       set(() => ({ contacts: [...get().contacts, contact] }));
  //     }
  //   },
  //   removeContacts: (contact) =>
  //     set(() => ({ contacts: get().contacts.filter((item) => item.link !== contact.link) }))
}));
