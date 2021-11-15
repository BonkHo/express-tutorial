const authorize = (req, res, next) => {
	// http://localhost:5000?user=john will be the only working route
	const { user } = req.query;
	if (user == "john") {
		req.user = { name: "john", id: 1 };
		next();
	} else {
		res.status(401).send("Unauthorized");
	}
};

module.exports = authorize;
