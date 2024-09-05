import { api } from '@/api/instance';

type PostUploadImgParams = FormData;

type PostUploadImgConfig = AxiosRequestConfig<PostUploadImgParams>;

export const postUploadImg = async ({ params, config }: PostUploadImgConfig) =>
  api.post<AnswerUploadTypes>(`/work/upload`, params, config);
