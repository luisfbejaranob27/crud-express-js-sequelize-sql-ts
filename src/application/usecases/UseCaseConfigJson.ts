import { UseCaseConfig } from './UseCaseConfig';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { JsonUserRepository } from '../../infrastructure/repositories/local/JsonUserRepository';
import { FindAllUseCase } from './user/FindAllUseCase';
import { FindByIdUseCase } from './user/FindByIdUseCase';
import { FindByEmailUseCase } from './user/FindByEmailUseCase';
import { CreateUseCase } from './user/CreateUseCase';
import { UpdateUseCase } from './user/UpdateUseCase';
import { DeleteUseCase } from './user/DeleteUseCase';

export class UseCaseConfigJson implements UseCaseConfig {
	repository: UserRepository;

	constructor() {
		this.repository = new JsonUserRepository();
	}
	findAllUseCase() {
		return new FindAllUseCase(this.repository);
	}

	findByIdUseCase() {
		return new FindByIdUseCase(this.repository);
	}

	findByEmailUseCase() {
		return new FindByEmailUseCase(this.repository);
	}

	createUseCase() {
		return new CreateUseCase(this.repository);
	}

	updateUseCase() {
		return new UpdateUseCase(this.repository);
	}

	deleteUseCase() {
		return new DeleteUseCase(this.repository);
	}
}
