import mongoose from "mongoose";

const DepartmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Departments = new mongoose.model("Departments", DepartmentsSchema);

export default Departments;
