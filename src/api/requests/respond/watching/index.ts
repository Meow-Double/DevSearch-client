import { api } from '@/api/instance';

interface PostAddWatchingParams {
  workId: string;
  name: string;
  avatarUrl: string;
  id: string;
}

type PostAddWatchingConfig = AxiosRequestConfig<PostAddWatchingParams>;

export const postAddWatching = async ({ params, config }: PostAddWatchingConfig) =>
  api.post<WatchingsType>(`/respond/watching`, params, config);
