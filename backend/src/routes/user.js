import { Router } from "express";
import { findUser, createUser , loginUser , updateUser , deleteUser , searchProduct } from "../controller/user.js";
import { isLoggedIn, isAdmin } from "../middlewares/authentication.js";
const router = Router();

router.post("/", createUser);
router.get("/", isLoggedIn, isAdmin, findUser);
router.post("/login", loginUser);
router.post("/update", isLoggedIn, updateUser);
router.delete("/Delete", isLoggedIn, deleteUser);
router.get("/search", searchProduct);

export default router;
