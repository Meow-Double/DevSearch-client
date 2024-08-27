import { api } from '@/api/instance';

interface PatchGeneralResumeParans {
  id: string;
}

type PatchGeneralResumeConfig = AxiosRequestConfig<PatchGeneralResumeParans>;

export const patchGeneralResume = ({ params, config }: PatchGeneralResumeConfig) =>
  api.patch<any>(`/resume/general/${params.id}`, params, config);
