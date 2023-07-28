//imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import openai from "openai";
import authRoute  from "./routes/auth.js";
import promptsRoute  from "./routes/prompts.js";
import tagsRoute  from "./routes/tags.js";
import usersRoute  from "./routes/users.js";


dotenv.config();

const app = express();
// database connection




app.use(express.json());

// check for cors

app.use(cors({
  domains: '*',
  methods: "*"
}));
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/prompts",promptsRoute);
app.use("/api/tags",tagsRoute);

//connection with moongoo
const connect = async () =>{
    
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}

//Middlewere para error handlind, entregando mensajes de manera personalizada
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || 500
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});
app.listen(3300,()=>{
    connect();
    console.log("Connected to backend");
    console.log("lisent with the port 3300");
});