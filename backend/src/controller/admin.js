import Admin from "../models/admin.js";
import bcrypt from "bcrypt";

export const createAdmin = async (req, res) => {
    console.log("create");
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
        const dbUser = await Admin.findOne({password});
        
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
    if(!admin){
        return res.status(404).send({"message":"Admin Not Found"});
    }
    const password_valid = await bcrypt.compare(password,admin.password);
    if(password_valid){
        return res.status(200).send({"message":"Login Success"})
    }
    return res.status(404).send({"message":"Bad Request"});
    
};
export const deleteAdmin = async (req,res) => {
    const{
        email
    } = req.body;
    const admin = await Admin.findOneAndDelete({email});
    if(admin){
        return res.status(200).send({"message":"Deleted"})
    }
    return res.status(404).send();
}

export const allUsers = async (req,res) => {
    const admin = await Admin.find();
    if(admin){
        return res.status(200).send(admin)
    }
    return res.status(404).send();
}