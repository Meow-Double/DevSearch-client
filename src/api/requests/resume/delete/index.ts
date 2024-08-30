import { api } from '@/api/instance';

// interface DeleteResumeParams {
//   id: string;
// }

type DeleteResumeConfig = AxiosRequestConfig;

export const deleteResume = ({ config }: DeleteResumeConfig) =>
  api.delete<string>(`/resume/delete`, config);
