import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import dataBaseConnection from './utils/database.js';
import userRoute from './routes/userRoute.js';
import cors from 'cors';

dataBaseConnection();

dotenv.config({
  path: '.env'
});

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Update your CORS configuration
const corsOptions = {
  origin: 'https://movie-app-ebon-one-61.vercel.app', // Add your frontend origin here
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

// api
app.use('/api/v1/user', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
