import { Router } from "express";
import { allUsers } from "../controller/users.js";

const router = Router();

router.get("/", allUsers);

export default router;
