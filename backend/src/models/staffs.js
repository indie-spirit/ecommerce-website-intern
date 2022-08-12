import mongoose from "mongoose";

const StaffsSchema = new mongoose.Schema({
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
    },
    dep_id: {
        type: String,
        required: true
    }
});

const Staffs= new mongoose.model("Staffs", StaffsSchema);

export default Staffs;