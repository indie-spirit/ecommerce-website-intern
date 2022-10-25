import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

export const verifyToken = (token) => {
    return jwt.verify(payload, process.env.JWT_SECRET);
}

export const decodeToken = (token) => {
    return jwt.decode(token);
}
