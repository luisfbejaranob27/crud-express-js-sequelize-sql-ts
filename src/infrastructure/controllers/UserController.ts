import express = require('express');
import { StatusCodes } from 'http-status-codes'
import { UseCaseConfig } from '../../application/usecases/UseCaseConfig';

export class UserController {
	useCases: UseCaseConfig

	constructor(useCaseConfig: UseCaseConfig) {
		this.useCases = useCaseConfig;
	}

	findAll = async (req: express.Request, res: express.Response) => {
		const users = await this.useCases.findAllUseCase().execute();

		if (users.length === 0) return res.status(StatusCodes.NOT_FOUND).send({ statusCode: StatusCodes.NOT_FOUND, error: 'Users not found' });

		return res.send(users);
	}

	find = async (req: express.Request, res: express.Response) => {
		const {
			params: { value },
			query: { filter }
		} = req;

		if (!filter) {
			const user = await this.useCases.findByIdUseCase().execute(value);

			if (!user) return res.status(StatusCodes.NOT_FOUND).send({ statusCode: StatusCodes.NOT_FOUND, error: `User with id: ${value} not found` });

			return res.send(user);
		}
		if (filter === 'email') {
			const user = await this.useCases.findByEmailUseCase().execute(value);

			if (!user) return res.status(StatusCodes.NOT_FOUND).send({ statusCode: StatusCodes.NOT_FOUND, error: `User with email: ${value} not found` });

			return res.send(user);
		} else {
			return res.status(StatusCodes.NOT_FOUND).send({ statusCode: StatusCodes.NOT_FOUND, error: `Filter: ${filter} not found` });
		}
	}

	create = async (req: express.Request, res: express.Response) => {
		const { body } = req;

		const result = await this.useCases.createUseCase().execute(body);

		return res.status(StatusCodes.CREATED).send(result);
	}

	update = async (req: express.Request, res: express.Response) => {
		const {
			body,
			params: { id }
		} = req;

		const updated = await this.useCases.updateUseCase().execute(id, body);

		if (!updated) return res.status(StatusCodes.NOT_FOUND).send({ statusCode: StatusCodes.NOT_FOUND, error: `User with id: ${id} not found` });

		return res.send(updated);
	}

	deleteById = async (req: express.Request, res: express.Response) => {
		const { id } = req.params;

		const deleted = await this.useCases.deleteUseCase().execute(id);

		if (!deleted) return res.status(StatusCodes.NOT_FOUND).send({ statusCode: StatusCodes.NOT_FOUND, error: `User with id: ${id} not found` });

		return res.status(StatusCodes.NO_CONTENT).send();
	}
}
