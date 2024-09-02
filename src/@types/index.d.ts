interface UserAnswer {
  token: string;
  user: userAnswerData;
}

interface UserAnswerData {
  id: string;
  email: string;
  avatarUrl: string;
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
  specialization;
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
