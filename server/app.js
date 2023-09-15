import FilesRoute from "./router/FilesRoute.js"

import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    credentials: true,
    origin: true
}))

app.use(FilesRoute)
app.listen(5000, ()=> {
    console.log('Server up and running!');
    }
)