import { api } from '@/api/instance';

type UpdateResumeParams = Partial<ResumeData>;

type PostUpdateResumeConfig = AxiosRequestConfig<UpdateResumeParams>;

export const postUpdateResume = async ({ params, config }: PostUpdateResumeConfig) =>
  api.post<ResumeData>(`/resume/update`, params, config);
