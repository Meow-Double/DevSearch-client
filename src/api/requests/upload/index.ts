import { api } from '@/api/instance';

type PostUpdateParams = FormData;

type PostUpdateConfig = AxiosRequestConfig<PostUpdateParams>;

export const postUpdate = ({ params, config }: PostUpdateConfig) =>
  api.post<ResumeData>(`/upload`, params, config);
