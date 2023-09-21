import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function jwtDecode(req, res, next) {
	
	if (req.headers && req.headers.authorization) {
		const token = req.headers.authorization.split(' ')[1];
		const decoded = jwt.decode(token, process.env.JWT_SECRET);
		req.user = decoded._id;
		next();
	} else {
		return res.status(400).json({ message: "you don't have acces" });
		req.user = null;
		next();
	}
}
