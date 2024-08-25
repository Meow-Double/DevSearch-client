import { create } from 'zustand';

interface UseResumeTypes {
  name: string;
  specialization: string;
  technologies: string[];
  skills: string[];
  workExperience: [];
  changeTechnologies: (technology: string) => void;
  changeSkills: (skill: string) => void;
  // fetchResume: (id: string) => void;
}

export const useResume = create<UseResumeTypes>((set, get) => ({
  name: '',
  specialization: '',
  technologies: [],
  skills: [],
  workExperience: [],
  changeTechnologies: (technology) => {
    const newTechnologies = get().technologies.filter((item) => item !== technology);
    console.log(newTechnologies);
    set(() => ({
      technologies: newTechnologies
    }));
  },
  changeSkills: (skill) => {
    const newSkills = get().skills.filter((item) => item !== skill);
    set((state) => ({
      ...state,
      skills: newSkills
    }));
  }
  // fetchResume: async (id: string) => {
  //   const { data } = await getResume({ params: { id } });
  //   set(() => ({
  //     ...data
  //   }));
  // }
}));
