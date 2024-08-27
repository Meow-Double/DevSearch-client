import * as z from 'zod';

export const generalSchema = z.object({
  name: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(40, { message: 'Максимальная длина 40 символов' }),
  specialization: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(24, { message: 'Максимальная длина 24 символа' }),
  about: z
    .string()
    .min(0, { message: 'Минимальная длина 0 символов' })
    .max(600, { message: 'Максимальная длина 600 символа' })
});

export type GeneralSchema = z.infer<typeof generalSchema>;
