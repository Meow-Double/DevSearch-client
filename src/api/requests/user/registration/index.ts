import { api } from '@/api/instance';

interface PostRegistrationParams {
  name: string;
  email: string;
  password: string;
}

type PostRegistrationConfig = AxiosRequestConfig<PostRegistrationParams>;

export const postRegistration = async ({ params, config }: PostRegistrationConfig) =>
  api.post<UserAnswer>('/user/registration', params, config);
