import User from "../models/user.js";

export const allUsers = async (req, res) => {
    
    const user = await User.find();
    if (user) {
        return res.status(200).send(user);
    }
    return res.status(404).send({ "message": "No Users Found" });
}
