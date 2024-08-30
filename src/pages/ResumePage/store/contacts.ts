import { create } from 'zustand';

interface UseContactsResumeTypes {
  contacts: ContactTypes[];
  addContact: (contact: ContactTypes) => void;
  removeContact: (contact: ContactTypes) => void;
  setData: (data: ResumeData) => void;
}

export const useContactsResume = create<UseContactsResumeTypes>((set, get) => ({
  contacts: [],
  setData: (data) => set(() => ({ contacts: data.contacts })),
  addContact: (contact) => {
    const isFind = get().contacts.find((item) => item.path === contact.path);
    if (!isFind) {
      set(() => ({ contacts: [...get().contacts, contact] }));
    }
  },
  removeContact: (contact) =>
    set(() => ({ contacts: get().contacts.filter((item) => item.path !== contact.path) }))
}));
