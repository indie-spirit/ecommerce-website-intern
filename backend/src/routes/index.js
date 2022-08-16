import { Router } from "express";

import department from "./department.js";
import Staffs from "./staff.js";
import Grievances from "./grievance.js";
import Students from "./student.js";

const router = Router();

router.use("/department", department);
router.use("/staffs",Staffs);
router.use("/grievance",Grievances);
router.use("/student",Students);

export default router;
