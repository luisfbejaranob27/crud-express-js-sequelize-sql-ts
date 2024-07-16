import express from 'express';
import statusCode from 'http-status-codes';
import userRouter from './infrastructure/routers/UserRouter';
import { UseCaseConfigJson } from './application/usecases/UseCaseConfigJson';

console.clear();
const app = express();
app.disable('x-powered-by');
const port = 2786;

const useCaseConfig = new UseCaseConfigJson();

app.use(express.json());
app.use('/api/v1', userRouter(useCaseConfig));

app.use((req, res) => {
	res.status(statusCode.NOT_FOUND).send({ error: 'Path not found 💥' });
});

app.listen(port, () => {
	console.log(`Server listening on port http://localhost:${port} 🚀`);
});
