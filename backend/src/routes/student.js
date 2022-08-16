import { Router } from "express";
import { createStudents } from "../controller/student.js";

const router = Router();

router.post("/",createStudents);

export default router;