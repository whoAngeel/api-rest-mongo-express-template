import jwt from "jsonwebtoken";
import { registerUser } from "../services/user.service.js";
import config from "../config/config.js";

export const register = async (req, res, next) => {
	try {
		const rta = await registerUser(req.body);
		res.status(201).json(rta);
	} catch (error) {
		next(error);
	}
};

export const login = async (req, res, next) => {
	try {
		const user = req.user;
		const payload = {
			sub: user._id,
			name: user.name,
			email: user.email,
		};
		const token = jwt.sign(payload, config.JWT_SECRET);
		res.json({
			user,
			token,
		});
	} catch (error) {
		next(error);
	}
};
