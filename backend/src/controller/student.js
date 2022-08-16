import Students from "../models/student.js";

export const createStudents = async (req, res) => {
    const {_id,name,email,phone_no,role,password,dep_id,year_of_joining,year_of_passing} = req.body;
    console.log(req.body);
    const Student=  new Students({
        _id:_id,
        name: name,
        email:email,
        phone_no:phone_no,
        role:role,
        password:password,
        dep_id:dep_id,
        year_of_joining:year_of_joining,
        year_of_passing:year_of_passing
    });

    try {
        await Student.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "Student Created" });
};