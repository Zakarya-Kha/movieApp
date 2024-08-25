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

const corsOptions = {
  origin:  'https://movie-app-e6xy.vercel.app',
  credentials: true,
};
app.use(cors(corsOptions));

// api
app.use('/api/v1/user', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
