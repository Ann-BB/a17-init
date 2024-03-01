import { z } from 'zod';
export const loginSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid Email Address'),
  password: z.string({ required_error: 'Password is required' }),
})


export const registerSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(3),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid Email Address'),
  password: z.string({ required_error: 'Password is required' }).min(6),
})