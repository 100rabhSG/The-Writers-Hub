import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import PostRoute from './routes/posts.js';
import UserRoute from './routes/users.js';
 
const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', PostRoute);
app.use('/user', UserRoute);

// const CONNECTION_URL = 'mongodb+srv://saurabh_sg:saurabh_sg@cluster0.dakyan3.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((err)=> console.log(err.message));

// Here you may get error on college wifi, try using mobile hotspot