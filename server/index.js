import express from "express";
import bodyParser from  "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import  postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

// para la base datos mondodb atlas

const CONNECTION_URL= 'mongodb+srv://memories:johnpeter83@chatbot.iv9fjrd.mongodb.net/?retryWrites=true&w=majority'
const PORT= process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
  .then(()=>app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`)))
  .catch((error)=> console.log(error.message));


