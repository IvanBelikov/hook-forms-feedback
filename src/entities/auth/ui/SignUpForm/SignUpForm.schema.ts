import * as z from 'zod'

export const SignUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    verifyPassword: z.string(),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: 'Passwords did not match!',
    path: ['verifyPassword'],
  })

export type SignUpType = z.infer<typeof SignUpSchema>
