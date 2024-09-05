import * as z from 'zod';

export const workSchema = z.object({
  specialization: z
    .string()
    .min(4, { message: 'Минимальная длина 4 символов' })
    .max(30, { message: 'Максимальная длина 30 символов' }),
  company_name: z
    .string()
    .min(3, { message: 'Минимальная длина 3 символов' })
    .max(20, { message: 'Максимальная длина 20 символов' }),
  workExperience: z
    .string()
    .min(4, { message: 'Минимальная длина 4 символов' })
    .max(20, { message: 'Максимальная длина 20 символов' }),
  paycheck: z
    .string()
    .min(1, { message: 'Минимальная длина 1 символов' })
    .max(16, { message: 'Максимальная длина 16 символов' }),
  desc: z
    .string()
    .min(10, { message: 'Минимальная длина 10 символов' })
    .max(600, { message: 'Максимальная длина 600 символов' }),
  specialization_desc: z
    .string()
    .min(10, { message: 'Минимальная длина 10 символов' })
    .max(600, { message: 'Максимальная длина 600 символов' }),
  job_desc: z
    .string()
    .min(10, { message: 'Минимальная длина 10 символов' })
    .max(600, { message: 'Максимальная длина 600 символов' })
});

export type WorkSchema = z.infer<typeof workSchema>;
