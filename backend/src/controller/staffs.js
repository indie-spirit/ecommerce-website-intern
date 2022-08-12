import Staffs from "../models/staffs.js";

export const createStaffs = async (req, res) => {
    const {_id,name,email,phone_no,role,password,dep_id} = req.body;
    console.log(req.body);
    const Staff=  new Staffs({
        _id:_id,
        name: name,
        email:email,
        phone_no:phone_no,
        role:role,
        password:password,
        dep_id:dep_id
    });

    try {
        await Staff.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "Staff Created" });
};