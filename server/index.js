import express from 'express';
import connection from "./database/db.js";
const app=express();

const PORT =8000;

app.listen(PORT,()=>console.log(`server is succesfully ON on port ${8000}`))


connection();