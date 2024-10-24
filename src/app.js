import express from "express";
import cors from "cors";
import morgan from "morgan";

import config from "./config/config.js";
import { appRouter } from "./routes/index.js";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
	res.send("ok");
});

appRouter(app);

app.listen(config.PORT, () => {
	console.log(`Server running on  http://localhost:${config.PORT}/`);
});
