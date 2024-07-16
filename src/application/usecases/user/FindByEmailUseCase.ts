import { UserRepository } from '../../../domain/repositories/UserRepository';
import { User } from '../../../domain/models/User';

export class FindByEmailUseCase {
	private readonly _repository: UserRepository;

	constructor(repository: UserRepository) {
		this._repository = repository;
	}

	async execute(email: string): Promise<User | null> {
		return await this._repository.findByEmail(email);
	}
}
