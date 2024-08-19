import { api } from '@/api/instance';

interface PostLoginParams {
  email: string;
  password: string;
}

type PostLoginConfig = AxiosRequestConfig<PostLoginParams>;

export const postLogin = ({ params, config }: PostLoginConfig) =>
  api.post('/user/login', params, config);
