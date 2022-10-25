import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

export const verifyToken = (token) => {
    try { 
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export const decodeToken = (token) => {
    return jwt.decode(token);
}
