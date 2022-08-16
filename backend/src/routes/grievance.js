import {Router} from "express";
import { createGrievances } from "../controller/grievance.js";

const router = Router();

router.post("/",createGrievances);
export default router;