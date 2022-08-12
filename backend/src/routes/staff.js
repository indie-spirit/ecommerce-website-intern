import { Router } from "express";
import { createStaffs } from "../controller/staffs.js";

const router = Router();

router.post("/",createStaffs);

export default router;