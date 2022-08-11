import Departments from "../models/departments.js";

export const createDepartment = async (req, res) => {
    const { name } = req.body;
    console.log(name);
    const department =  new Departments({
        name: name
    });

    try {
        await department.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "Department Created" });
};
