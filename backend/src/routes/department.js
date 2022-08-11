import { Router } from "express";
import { createDepartment } from "../controller/departments.js";

const router = Router();

router.post("/", createDepartment);

export default router;
