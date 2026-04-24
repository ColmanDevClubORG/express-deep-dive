import { z } from 'zod';

//When writing production code, we should bring the erorrs, magic numbers and regex from constant files
export const getExampleSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a numeric string'),
  }),
});

export const createExampleSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long'),
  }),
});
