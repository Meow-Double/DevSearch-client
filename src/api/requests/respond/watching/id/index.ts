import { api } from '@/api/instance';

interface PostWarchingUserParams {
  workId: string;
  userId: string;
}

type PostWarchingUserConfig = AxiosRequestConfig<PostWarchingUserParams>;

export const postDeleteWarchingUser = async ({ params, config }: PostWarchingUserConfig) => {
  const { workId, ...other } = params;
  return api.post<any>(`/respond/delete/${workId}`, other, config);
};
