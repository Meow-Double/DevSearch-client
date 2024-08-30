import { useEffect } from 'react';

import { useResume } from '@/global/store';

import { useContactsResume } from '../store/contacts';

export const useContacts = () => {
  const resume = useResume((state) => state.resume);
  const contacts = useContactsResume((state) => state);

  useEffect(() => {
    contacts.setData(resume);
  }, [resume]);

  return { ...contacts };
};
