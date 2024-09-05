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

interface WorkTypes {
  _id: string;
  user: string;
  specialization: string;
  company_name: string;
  workExperience: string;
  paycheck: '15$/час';
  desc: string;
  requirements: string[];
  specialization_desc: string;
  job_desc: string;
  technologies: string[];
  watching_number: number;
  responded_number: number;
  author: AuthorWorkCardTypes;
  backgroundImg: string;
}

type ExcludeWorkTypes = {
  _id: string;
  user: string;
  company_name: string;
  watching_number: number;
  responded_number: number;
  author: AuthorWorkCardTypes;
  backgroundImg: string;
};

type AnswerCreateWorkTypes = Exclude<WorkTypes, ExcludeWorkTypes>;

type AuthorWorkCardTypes = {
  id: string;
  name: string;
  avatarUrl: string;
};

type WorksType = WorkTypes[];

interface WorkCardTypes {
  specialization: string;
  workExperience: string;
  paycheck: string;
  company_name: string;
  specialization_desc: string;
  id: string;
}

type WorkCardsType = WorkCardTypes[];

interface AnswerUploadTypes {
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}
