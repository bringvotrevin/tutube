import express from "express";

const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
	return res.end();
} )

app.listen(PORT, function() {
	console.log("server listening on port 4000...");
});