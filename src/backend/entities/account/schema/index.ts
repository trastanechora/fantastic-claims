import z from 'zod';

export const userFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});
