export class UserAlreadyExistsException extends Error {
	constructor() {
		super('User Already Exists');
	}
}
