import { UserRepository } from '../../../domain/repositories/UserRepository';
import { User } from '../../../domain/models/User';

export class UpdateUseCase {
	private readonly _repository: UserRepository;

	constructor(repository: UserRepository) {
		this._repository = repository;
	}

	async execute(id: string, user: User): Promise<User | null> {
		return await this._repository.update(id, user);
	}
}
