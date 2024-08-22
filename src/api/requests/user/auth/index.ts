import { api } from '@/api/instance';

type GetAuthConfig = AxiosRequestConfig;

export const getAuth = ({ config }: GetAuthConfig) => api.get<UserAnswerData>('/user/auth', config);
