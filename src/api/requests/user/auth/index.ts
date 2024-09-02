import { api } from '@/api/instance';

type GetAuthConfig = AxiosRequestConfig;

export const getAuth = async ({ config }: GetAuthConfig) =>
  api.get<UserAnswerData>('/user/auth', config);
