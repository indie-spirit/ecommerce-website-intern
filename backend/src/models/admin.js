import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
       type: String,
       required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_no: {
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