import { create } from 'zustand';

interface UseWorkData {
  workData: WorkTypes | null;
  setWorkData: (data: WorkTypes) => void;
}

export const useWorkData = create<UseWorkData>((set, get) => ({
  workData: null,
  setWorkData: (data) => set(() => ({ workData: { ...get().workData, ...data } }))
}));
