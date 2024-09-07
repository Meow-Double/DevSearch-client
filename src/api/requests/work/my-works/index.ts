import { api } from '@/api/instance';

type GetMyWorksConfig = AxiosRequestConfig;

export const getMyWorks = async ({ config }: GetMyWorksConfig) =>
  api.get<any>(`/work/my-works`, config);
