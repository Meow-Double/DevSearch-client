import { api } from '@/api/instance';

interface GetWorkParams {
  id: string;
}

type GetWorkConfig = AxiosRequestConfig<GetWorkParams>;

export const getWork = async ({ params, config }: GetWorkConfig) =>
  api.get<WorkTypes>(`/work/${params.id}`, config);
