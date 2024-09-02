import { api } from '@/api/instance';

interface PostLoginParams {
  email: string;
  password: string;
}

type PostLoginConfig = AxiosRequestConfig<PostLoginParams>;

export const postLogin = async ({ params, config }: PostLoginConfig) =>
  api.post<UserAnswer>('/user/login', params, config);
