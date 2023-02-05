import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import video from "./router/videoRouter";
import user from "./router/userRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("views", process.cwd() + "/src/views" )

app.use(logger);
app.use('/', globalRouter);
app.use('/video', video);
app.use('/user', user);

app.listen(PORT, function() {
	console.log("server listening on port 4000...");
});