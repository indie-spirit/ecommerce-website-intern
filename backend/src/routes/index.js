import { Router } from "express";
import department from "./department.js";

const router = Router();

router.use("/department", department);

export default router;
