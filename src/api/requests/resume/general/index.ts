import { api } from '@/api/instance';

type GetGeneralResumeConfig = AxiosRequestConfig;

export const getGeneralResume = ({ config }: GetGeneralResumeConfig) =>
  api.get<any>(`/resume/general`, config);
