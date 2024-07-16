import z from 'zod';

export const userSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string().min(13).max(18),
	address: z.string()
});

export type User = z.infer<typeof userSchema>;
