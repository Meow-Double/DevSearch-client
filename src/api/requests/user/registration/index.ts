import { api } from '@/api/instance';

interface PostRegistrationParams {
  name: string;
  email: string;
  password: string;
}

type PostRegistrationConfig = AxiosRequestConfig<PostRegistrationParams>;

export const postRegistration = ({ params, config }: PostRegistrationConfig) =>
  api.post('/user/registration', params, config);
