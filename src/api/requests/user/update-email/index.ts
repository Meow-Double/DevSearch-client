import { api } from '@/api/instance';

interface PostUpdateEmailParams {
  newEmail: string;
  password: string;
}

type PostUpdateEmailConfig = AxiosRequestConfig<PostUpdateEmailParams>;

export const postUpdateEmail = async ({ params, config }: PostUpdateEmailConfig) =>
  api.post<any>('/user/update-email', params, config);
