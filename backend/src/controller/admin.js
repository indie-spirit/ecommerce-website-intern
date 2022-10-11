import Admin from "../models/admin.js";

export const createAdmin = async (req, res) => {
    const {
        _id,
        name,
        email,
        phone_no,
        role,
        password,
    } = req.body;
    const Admin =  new Admin({
        _id:_id,
        name: name,
        email: email,
        phone_no: phone_no,
        role: role,
        password: password,
    });

    try {
        await Admin.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "Admin Created" });
};