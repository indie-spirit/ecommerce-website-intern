import { Router } from "express";
import { createUser , loginUser , updateUser , deleteUser , searchProduct } from "../controller/user.js";

const router = Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.post("/update", updateUser);
router.delete("/Delete", deleteUser);
router.get("/search", searchProduct);

export default router;
