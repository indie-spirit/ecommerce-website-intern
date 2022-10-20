import bcrypt from "bcrypt";
import Product from "../models/product.js";
import User from "../models/user.js";

export const createUser = async (req, res) => {
    console.log("create");
    const {
        name,
        address,
        phoneNo,
        age,
        email,
        password,
    } = req.body;
    const user =  new User({
        name: name,
        address: address,
        phoneNo: phoneNo,
        age: age,
        email: email,
        password: password
    });

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
};

export const loginUser = async (req, res) => {
    const {
        email, password,
    } = req.body; 
    const user = await User.findOne({email});
    console.log(email);
    if(!user){
        return res.status(404).send({"message":"User Not Found"});
    }
    const password_valid = await bcrypt.compare(password,user.password);
    if(password_valid){
        return res.status(200).send({"message":"Login Success"})
    }
    return res.status(404).send({"message":"Bad Request"});
    
};

export const updateUser =  async (req,res) => {
    const {
            email,name,address,age,phoneNo,password      
        } = req.body;
        const filter = {email};
        const dbUser = await User.findOne({email});
        if(!dbUser){
            return res.status(404).send({"message":"User Not Found"});
        }
    
        const updateUser = await User.updateOne(filter, req.body);
        if(updateUser){
                return res.status(200).send({"message":"Successfully Updated"});
        }        
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

export const searchProduct = async (req,res) => {
    const{
        name
    } = req.body;
    const product = await Product.find({name});
    if(!name){
        return res.status.send(400).send({"message":"Product not Found"});

    }
    return res.status(200).send(product);
}
