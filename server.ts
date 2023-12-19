import express from "express";
import tasks from "./routes/tasks";

const app = express();

app.use('/', tasks);

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`app is listening on PORT ${port}`));


