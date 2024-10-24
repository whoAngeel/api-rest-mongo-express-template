import { User } from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
	const users = await User.find();
	return users;
};
