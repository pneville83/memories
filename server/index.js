import express from "express";
import bodyParser from  "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from  'dotenv';

import  postRoutes from './routes/posts.js'

const app = express();
dotenv.config();



app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

// para la base datos mondodb atlas

const CONNECTION_URL= process.env.CONNECTION_URL;
const PORT= process.env.PORT;

mongoose.connect(CONNECTION_URL)
  .then(()=>app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`)))
  .catch((error)=> console.log(error.message));


