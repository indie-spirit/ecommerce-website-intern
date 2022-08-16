
import Grievances from "../models/grievance.js";


export const createGrievances = async(req,res)=>{
      const{student_id,grievance,subject}=req.body;
      console.log(req.body);
      const Grievance= new Grievances({
        student_id:student_id,
        grievance:grievance,
        subject: subject
      });
      console.log(Grievance);

      try {
        await Grievance.save();
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Server Error" });
    }

    return res.status(200).send({ message: "Grievance Created" });
};