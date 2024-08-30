import { api } from '@/api/instance';

type GetResumeConfig = AxiosRequestConfig;

export const getResume = async ({ config }: GetResumeConfig) =>
  api.get<ResumeData>(`/resume`, config);
