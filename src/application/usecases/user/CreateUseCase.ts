import { UserRepository } from '../../../domain/repositories/UserRepository';
import { User } from '../../../domain/models/User';

export class CreateUseCase {
	private readonly _repository: UserRepository;

	constructor(repository: UserRepository) {
		this._repository = repository;
	}

	async execute(user: User): Promise<User | null> {
		return await this._repository.create(user);
	}
}
