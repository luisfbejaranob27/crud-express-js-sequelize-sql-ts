import { UserRepository } from '../repositories/UserRepository';

export class ExistUserByEmail {
	private readonly _userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this._userRepository = userRepository;
	}

	async execute(email: string): Promise<boolean> {
		const user = await this._userRepository.findByEmail(email);

		return user != null;
	}
}
