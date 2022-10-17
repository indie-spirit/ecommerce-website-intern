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
        const dbUser = await Admin.findOne({email});
        if (dbUser) {
            return res.status(403).json({ message: "User already exists"});
        }
        await admin.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "Admin Created" });
};

export const loginAdmin = async (req, res) => {
    const {
        email, password,
    } = req.body; 
    const admin = await Admin.findOne({email});
    if (!admin) {
        return res.status(404).send();
    }
    if (admin.password !== password) {
        return res.status(400).json({ "message" : "Incorrect Password"});
    }
    return res.status(200).send();
};
