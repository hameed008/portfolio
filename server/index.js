import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import user from './routes/user.js';
import connectDB from './db/connectdb.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));

const port = process.env.PORT || '8000';
const host = process.env.HOST || 'localhost';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017';
connectDB(DATABASE_URL)

app.use('/', user)

app.listen(port, function () {
  console.log(`Server is listening at http://${host}:${port}`);
});