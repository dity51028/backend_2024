import express from "express";
import { BASE_URI } from "./app/config";
import { baseRoutes } from "./app/routes";

const app = express();
app.use(BASE_URI,baseRoutes);

app.listen(8080,()=>{
    console.log('welcome to server')
})