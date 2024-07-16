import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UseCaseConfig } from '../../application/usecases/UseCaseConfig';
import { validateBody, validatePartialBody } from '../schema/ValidationSchema';
import { userSchema } from '../schema/User';

const userRouter = (useCaseConfig: UseCaseConfig) => {
	const router = Router();

	const userController = new UserController(useCaseConfig);
	return router
		.get('/users', userController.findAll)
		.get('/users/:value', userController.find)
		.post('/users', validateBody(userSchema), userController.create)
		.patch('/users/:id', validatePartialBody(userSchema), userController.update)
		.delete('/users/:id', userController.deleteById);
}

export default userRouter;
