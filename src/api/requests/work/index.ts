import { api } from '@/api/instance';

type GetWorkCardsConfig = AxiosRequestConfig;

export const getWorkCards = async ({ config }: GetWorkCardsConfig) =>
  api.get<WorkCardsType>(`/work`, config);
