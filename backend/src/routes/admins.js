import { Router } from "express";
import { allAdmins } from "../controller/admins.js";

const router = Router();

router.get("/", allAdmins);

export default router;
