import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views" )

app.use(logger);
app.use('/', globalRouter);
app.use('/video', videoRouter);
app.use('/user', userRouter);

app.listen(PORT, function() {
	console.log("server listening on port 4000...");
});