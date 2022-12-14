import { Router } from "express";
import {
    createAdmin,
    loginAdmin,
    deleteAdmin,
    findAdmin,
    searchProduct,
    deleteUser,
    addUser,
 } from "../controller/admin.js";
import { isLoggedIn } from "../middlewares/authentication.js";
import { isAdmin } from "../middlewares/authorization.js";

const router = Router();

router.post("/", isLoggedIn, isAdmin, createAdmin);
router.delete("/", isLoggedIn, deleteAdmin);
router.get("/", findAdmin);

router.post("/login", loginAdmin);

router.get("/productsearch", searchProduct);
router.delete("/userdelete", deleteUser);
router.post("/adduser", addUser)

export default router;