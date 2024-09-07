import { api } from '@/api/instance';

type GetRespondsConfig = AxiosRequestConfig;

export const getResponds = async ({ config }: GetRespondsConfig) =>
  api.get<RespondsType>(`/respond`, config);

interface PostRespondsParams {
  workId: string;
  specialization: string;
  company_name: string;
  status: string;
}

type PostRespondsConfig = AxiosRequestConfig<PostRespondsParams>;

export const postResponds = async ({ params, config }: PostRespondsConfig) =>
  api.post<RespondTypes>(`/respond`, params, config);
