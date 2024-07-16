import { UserRepository } from '../../../domain/repositories/UserRepository';

export class DeleteUseCase {
	private readonly _repository: UserRepository;

	constructor(repository: UserRepository) {
		this._repository = repository;
	}

	async execute(id: string): Promise<boolean> {
		return await this._repository.deleteById(id);
	}
}
