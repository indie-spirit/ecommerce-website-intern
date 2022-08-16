import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema({
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
        required: true
    },
    dep_id: {
        type: String,
        required: true
    },
    year_of_joining: {
        type: Date,
        required: true
    },
    year_of_passing: {
        type: Date,
        required: true
    }
   
});


const Students= new mongoose.model("Students", StudentsSchema);

export default Students;