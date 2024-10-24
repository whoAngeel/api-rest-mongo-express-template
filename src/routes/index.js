import { Router } from "express";
import UsersRouter from "./users.routes.js";

export function appRouter(app) {
	const router = Router();
	app.use("/api", router);

	router.use("/users", UsersRouter);
}
