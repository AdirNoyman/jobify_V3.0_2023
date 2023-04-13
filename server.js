import express from 'express';
import 'express-async-errors';
import connectDB from './db/connect.js';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// Authenticate User

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

// Middleware - load the json payload to the request body
app.use(express.json());

app.get('/', (req, res) => {
	res.json({msg: 'Welcome! 😎🤟'});
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

// Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URL);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port} 😎🤟...`)
		);
	} catch (error) {
		console.log('Error connecting to the database:', error);
	}
};

start();
