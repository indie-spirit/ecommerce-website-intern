import mongoose from "mongoose";

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

const Admin = new mongoose.model("Admin", AdminSchema);

export default Admin;