import * as z from 'zod';

export const updatePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, { message: 'Минимальная длина 6 символов' })
      .max(16, { message: 'Максимальная длина 16 символа' }),
    newPassword: z
      .string()
      .min(6, { message: 'Минимальная длина 6 символов' })
      .max(16, { message: 'Максимальная длина 16 символа' }),
    confirmPassword: z.string().min(6, 'Повторите пароль')
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Введенные пароли не совпадают'
  });

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
