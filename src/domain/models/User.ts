export class User {
	id: string;
	name: string;
	email: string;
	phone: string;
	address: string;
	createdAt: string;
	updatedAt: string;

	constructor(id: string, name: string, email: string, phone: string, address: string) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.createdAt = new Date().toISOString();
		this.updatedAt = ''
	}
}
