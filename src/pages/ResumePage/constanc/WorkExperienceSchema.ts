import * as z from 'zod';

export const workExperienceSchema = z.object({
  company_name: z
    .string()
    .min(4, { message: 'Минимальная длина 4 символов' })
    .max(20, { message: 'Максимальная длина 20 символов' }),
  specialization: z
    .string()
    .min(4, { message: 'Минимальная длина 4 символов' })
    .max(40, { message: 'Максимальная длина 40 символов' }),
  years: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(0, { message: 'Минимальное значение 0' })
      .max(100, { message: 'Максимальное значение 100' })
  ),
  months: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(0, { message: 'Минимальное значение 0' })
      .max(11, { message: 'Максимальное значение 11' })
  ),
  desc: z
    .string()
    .min(0, { message: 'Минимальная длина 0 символов' })
    .max(800, { message: 'Максимальная длина 800 символов' })
});

export type WorkExperienceSchema = z.infer<typeof workExperienceSchema>;
