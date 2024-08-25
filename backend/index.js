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

// CORS configuration
const corsOptions = {
  origin: '*', // Allow all origins (use this for testing purposes only)
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

// api routes
app.use('/api/v1/user', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
