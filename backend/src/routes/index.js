import { Router } from "express";
//import Staffs from "../models/Staffs.js";
import department from "./department.js";
import Staffs from "./staff.js";

const router = Router();

router.use("/department", department);

router.use("/staffs",Staffs);

export default router;
