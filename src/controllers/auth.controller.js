import { registerUser } from "../services/user.service.js";

export const register = async (req, res, next) => {
	try {
		const rta = await registerUser(req.body);
		res.status(201).json(rta);
	} catch (error) {
		next(error);
	}
};
