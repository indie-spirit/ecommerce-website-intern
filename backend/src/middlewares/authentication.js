import { verifyToken } from "../modules/auth.js";

export const isLoggedIn = async (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        return res.status(400).json({ message: "Missing auth token in headers" });
    }
    const token = bearerToken.split(' ')[1];
    if(verifyToken(token)) {
        next();
    } else {
        return res.status(403).json({ message: "Invalid token or token expired. Please re-login." });
    }
}
