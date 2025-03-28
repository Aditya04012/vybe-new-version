require('dotenv').config()
const express=require('express');
const cors=require('cors');
const app=express();
const UserRouter=require('./routes/userModel.js');
const port=5000;
const data=require('./data.js');
const globalMiddleware=require('./controllers/errorController.js');
app.use(express.json());
app.use(cors());

app.use("/vybe/api/v1",UserRouter);

app.use(globalMiddleware);


module.exports=app;
