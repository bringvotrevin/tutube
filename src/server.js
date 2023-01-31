import express from "express";

const PORT = 4000;
const app = express();


const routerLogger = (req, res, next) => {
	 console.log("PATH : ",  req.path);
	 next();
}

const methodLogger = (req, res, next) => {
	console.log("METHOD", req.method);
	next();
}

const home = (req, res, next) => {
	console.log("in home function");
	return res.send("home");
}

const login = (req, res, next) => {
	return res.send("login");
}

app.use(methodLogger, routerLogger);
app.get('/', home);
app.get('/login', login);

app.listen(PORT, function() {
	console.log("server listening on port 4000...");
});