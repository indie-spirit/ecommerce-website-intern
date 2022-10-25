import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import Product from "../models/product.js";
import { generateToken } from "../modules/auth.js";

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
        const dbUser = await Admin.findOne({email});
        
        if (dbUser) {
            return res.status(409).json({ message: "User already exists"});
        }
        await admin.save();
        const jwt = generateToken({ name, role });
        return res.status(200).json({
            message: "Admin Created",
            accessToken: jwt
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const loginAdmin = async (req, res) => {
    const {
        email, password,
    } = req.body; 
    const admin = await Admin.findOne({email});
    if(!admin) {
        return res.status(404).send({ "message": "Admin Not Found" });
    }
    const passwordValid = await bcrypt.compare(password, admin.password);
    if(passwordValid){
        const { name, role } = admin;
        const jwt = generateToken({ name, role });
        return res.status(200).json({
            "message": "Login Success",
            "accessToken": jwt
        });
    }
    return res.status(400).send({ "message": "Password incorrect" });  
};

export const deleteAdmin = async (req,res) => {
    const{
        email
    } = req.body;
    const admin = await Admin.findOneAndDelete({email});
    if(admin){
        return res.status(200).send({"message":"Admin Deleted"})
    }
    return res.status(404).send();
}

export const findAdmin = async (req,res) => {
   const{
    email
   }= req.body;
   const admin = await  Admin.findOne({email});
   if(admin){
    return res.status(200).send(admin);
   }
   return res.status(404).send({"message":"Admin Not Found"});

}

export const searchProduct = async (req,res) => {
    const {
        name 
    } = req.body;
    const product = await Product.find({name});
    if(product){
        return res.status(200).send(product);
    }
    return res.status(404).send({"message":"Product Not Found"});
}

export const deleteUser = async (req,res) => {
    const {
        email
    } = req.body;
    const user = await User.findOneAndDelete({email});
    if(user){
        return res.status(200).send({"message":"User Deleted"})
    }
    return res.status(404).send();

}

export const addUser = async (req,res) => {
    const { name,
        address,
        phoneNo,
        age,
        email,
        password,
    } = req.body;

    try {
        const dbUser = await User.findOne({email});
        
        if (dbUser) {
            return res.status(403).json({ message: "User already exists"});
        }
        await user.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "User Created" });
}
