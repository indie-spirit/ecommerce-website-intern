import { Router } from "express";
import { createAdmin, loginAdmin, deleteAdmin, allUsers } from "../controller/admin.js";

const router = Router();

router.post("/", createAdmin);
router.post("/login", loginAdmin);
router.delete("/Delete", deleteAdmin);
router.get("/alluser", allUsers);

export default router;