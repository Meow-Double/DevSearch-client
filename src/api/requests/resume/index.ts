import { api } from '@/api/instance';

type GetResumeParams = {
  id: string;
};

type GetResumeConfig = AxiosRequestConfig<GetResumeParams>;

export const getResume = ({ params, config }: GetResumeConfig) =>
  api.get<any>(`/resume/${params.id}`, config);
