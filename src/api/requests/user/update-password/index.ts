import { api } from '@/api/instance';

interface PostUpdatePasswordParams {
  oldPassword: string;
  newPassword: string;
}

type PostUpdatePasswordConfig = AxiosRequestConfig<PostUpdatePasswordParams>;

export const postUpdatePassword = async ({ params, config }: PostUpdatePasswordConfig) =>
  api.post<any>('/user/update-password', params, config);
