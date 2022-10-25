import mongoose from "mongoose";
import bcrypt from "bcrypt";

const AdminSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    }
});

AdminSchema.pre('save', async function(next) {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    }
    catch(error){
     next(error);
    }
})
const Admin = new mongoose.model("Admin", AdminSchema);

export default Admin;
