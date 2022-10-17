import { Router } from "express";
import { createAdmin, loginAdmin } from "../controller/admin.js";

const router = Router();

router.post("/", createAdmin);
router.post("/login", loginAdmin);

export default router;