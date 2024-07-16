import express = require('express');
import { ZodError, ZodIssue, ZodObject } from 'zod';
import { StatusCodes } from 'http-status-codes'

export function validateBody(schema: ZodObject<any>) {
	return (req: express.Request, res: express.Response, next: express.NextFunction) => {
		try {
			schema.parse(req.body);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: buildErrorMessages(error.errors) });
			} else {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
			}
		}
	};
}

export function validatePartialBody(schema: ZodObject<any>) {
	return (req: express.Request, res: express.Response, next: express.NextFunction) => {
		try {
			req.body = schema.partial().parse(req.body);
			next();
		} catch (error) {
			if (error instanceof ZodError) {
				res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: buildErrorMessages(error.errors) });
			} else {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
			}
		}
	};
}

function buildErrorMessages(errors: ZodIssue[]) {
	return errors.map((issue) => ({
		message: `${issue.path} is ${issue.message}`
	}));
}
