import { create } from 'zustand';

interface ContactsTypes {
  name: string;
  path: string;
}

interface UseGeneralResumeTypes {
  name: string;
  specialization: string;
  about: string;
  contacts: ContactsTypes[];
  setData: (data: any) => void;
  addContact: (contact: ContactsTypes) => void;
  removeContact: (contact: ContactsTypes) => void;
}

export const useGeneralResume = create<UseGeneralResumeTypes>((set, get) => ({
  name: '',
  specialization: '',
  about: '',
  contacts: [],
  setData: (data) => set(() => ({ ...data })),
  addContact: (contact: ContactsTypes) => {
    const findContact = get().contacts.find((item) => item.path === contact.path);

    if (!findContact) return set(() => ({ contacts: [...get().contacts, contact] }));
  },
  removeContact: (contact: ContactsTypes) =>
    set(() => ({ contacts: get().contacts.filter((item) => item.path !== contact.path) }))
}));
