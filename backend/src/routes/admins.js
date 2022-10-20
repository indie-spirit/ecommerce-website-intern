import { Router } from "express";
import { allAdmins } from "../controller/admins";

const router = Router();

router.get("/", allAdmins);
