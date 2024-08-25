import { create } from 'zustand';

type ContactTypes = {
  name: string;
  link: string;
};
interface UseContactsResumeTypes {
  contacts: ContactTypes[];
  addContacts: (contact: ContactTypes) => void;
  removeContacts: (contact: ContactTypes) => void;
}

export const useContactsResume = create<UseContactsResumeTypes>((set, get) => ({
  contacts: [],
  addContacts: (contact) => {
    const isFind = get().contacts.find((item) => item.link === contact.link);
    if (!isFind) {
      set(() => ({ contacts: [...get().contacts, contact] }));
    }
  },
  removeContacts: (contact) =>
    set(() => ({ contacts: get().contacts.filter((item) => item.link !== contact.link) }))
}));
