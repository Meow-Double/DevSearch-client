import { api } from '@/api/instance';

type PostUploadParams = FormData;

type PostUploadConfig = AxiosRequestConfig<PostUploadParams>;

export const postUpload = async ({ params, config }: PostUploadConfig) =>
  api.post<AnswerUploadTypes>(`/user/upload`, params, config);
