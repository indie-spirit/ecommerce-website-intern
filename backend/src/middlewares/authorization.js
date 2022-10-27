export const isAdmin = async (req, res, next) => {   
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(' ')[1];
    const { role } = decodeToken(token);
    if(role === "admin") {
        next();
    } else {
        return res.status(403).json({ message: "User not authorised to perform this action" });
    } 
}