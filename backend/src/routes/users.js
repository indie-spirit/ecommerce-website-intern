import { Router } from "express";
import { allUsers } from "../controller/users";

const router = Router();

router.get("/", allUsers);
