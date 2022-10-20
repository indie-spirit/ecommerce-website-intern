import { Router } from "express";
import {
    createAdmin,
    loginAdmin,
    deleteAdmin,
    findAdmin,
    findUser,
    searchProduct,
    deleteUser,
    addUser,
 } from "../controller/admin.js";

const router = Router();

router.post("/", createAdmin);
router.delete("/", deleteAdmin);
router.get("/", findAdmin);

router.post("/login", loginAdmin);

router.get("/productsearch", searchProduct);
router.delete("/userdelete", deleteUser);
router.post("/adduser", addUser)

export default router;