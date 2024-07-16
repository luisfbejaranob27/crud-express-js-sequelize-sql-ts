import { User } from '../models/User';

export interface UserRepository {
	findAll: () => Promise<User[]>
	findById: (id: string) => Promise<User | null>
	findByEmail: (email: string) => Promise<User | null>
	create: (user: User) => Promise<User | null>
	update: (id: string, user: User) => Promise<User | null>
	deleteById: (id: string) => Promise<boolean>
}
