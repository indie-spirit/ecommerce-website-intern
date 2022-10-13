import Admin from "../models/admin.js";

export const createAdmin = async (req, res) => {
    const {
        name,
        email,
        phoneNo,
        role,
        password,
    } = req.body;
    const admin =  new Admin({
        name: name,
        email: email,
        phoneNo: phoneNo,
        role: role,
        password: password,
    });

    try {
        await admin.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "Admin Created" });
};