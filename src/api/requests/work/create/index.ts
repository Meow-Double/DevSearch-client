import { api } from '@/api/instance';

interface PostCreateWorkParams {}

type PostCreateWorkConfig = AxiosRequestConfig<PostCreateWorkParams>;

export const postCreateWork = async ({ params, config }: PostCreateWorkConfig) =>
  api.post<AnswerCreateWorkTypes>('/work/create', params, config);
