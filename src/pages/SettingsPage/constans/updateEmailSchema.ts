import * as z from 'zod';

import { validateEmail } from '@/pages/AuthPages/utils';

export const updateEmailSchema = z.object({
  password: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(16, { message: 'Максимальная длина 16 символа' }),
  newEmail: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(40, { message: 'Максимальная длина 40 символов' })
    .refine((email) => validateEmail(email), { message: 'Некорректная почта' })
});

export type UpdateEmailSchema = z.infer<typeof updateEmailSchema>;
