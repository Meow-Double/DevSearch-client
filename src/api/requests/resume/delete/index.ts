import { api } from '@/api/instance';

// interface DeleteResumeParams {
//   id: string;
// }

type DeleteResumeConfig = AxiosRequestConfig;

export const deleteResume = async ({ config }: DeleteResumeConfig) =>
  api.delete<string>(`/resume/delete`, config);
