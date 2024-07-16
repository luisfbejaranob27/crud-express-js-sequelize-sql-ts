import { UserRepository } from '../../../domain/repositories/UserRepository';
import { User } from '../../../domain/models/User';
import db from './Users.json';
import crypto from 'node:crypto';

export class JsonUserRepository implements UserRepository {
	async create(user: User): Promise<User | null> {
		const { name, email, phone, address } = user;

		const id = crypto.randomUUID();
		const newUser = new User(id, name, email, phone, address);
		db.push(newUser);
		return Promise.resolve(newUser);
	}

	async deleteById(id: string): Promise<boolean> {
		const index = db.findIndex((userDb) => userDb.id === id);

		if (index > -1) {
			db.splice(index, 1);
			return Promise.resolve(true);
		}

		return Promise.resolve(false);
	}

	async findAll(): Promise<User[]> {
		const users = db as User[];
		return Promise.resolve(users);
	}

	async findByEmail(email: string): Promise<User | null> {
		const found = db.find((user) => user.email === email);

		if (found === undefined) return null;

		return Promise.resolve(found);
	}

	async findById(id: string): Promise<User | null> {
		const found = db.find((user) => user.id === id);

		if (found === undefined) return null;

		return Promise.resolve(found);
	}

	async update(id: string, user: User): Promise<User | null> {
		const index = db.findIndex((userDb) => userDb.id === id);

		let userUpdated;

		if (index > -1) {
			userUpdated = {
				...db[index],
				...user,
				updatedAt: new Date().toISOString()
			};

			db[index] = userUpdated;

			return Promise.resolve(userUpdated);
		}

		return Promise.resolve(null);
	}
}
