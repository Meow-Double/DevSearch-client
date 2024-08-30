interface UserAnswer {
  token: string;
  user: userAnswerData;
}

interface UserAnswerData {
  id: string;
  email: string;
  avatar_url: string;
  name: string;
}

type ContactTypes = {
  name: string;
  path: string;
};

type WorkExperienceTypes = {
  company_name: string;
  desc: string;
  years: number;
  months: number;
};

interface ResumeData {
  about: string;
  name: string;
  specialization: string;
  contacts: ContactTypes[];
  skills: string[];
  technologies: string[];
  workExperience: WorkExperienceTypes[];
}
