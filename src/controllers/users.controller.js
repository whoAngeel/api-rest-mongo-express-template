export const getUsers = async (req, res, next) => {
	try {
		return res.send("users");
	} catch (error) {
		next(error);
	}
};
