import * as z from 'zod'

export const signInSchema = z.object({
  email: z.string().email('Incorrect email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export type signInType = z.infer<typeof signInSchema>
