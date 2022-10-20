import { Router } from "express";
import { createAdmin, loginAdmin, deleteAdmin, allAdmin , allUsers , findAdmin, findUser , searchProduct ,  deleteUser , addUser } from "../controller/admin.js";

const router = Router();

router.post("/", createAdmin);
router.post("/login", loginAdmin);
router.delete("/Delete", deleteAdmin);
router.get("/alladmin", allAdmin);
router.get("/oneadmin", findAdmin)
router.get("/allusers", allUsers);
router.get("/oneuser", findUser);
router.get("/productsearch", searchProduct);
router.delete("/userdelete", deleteUser);
router.post("/adduser", addUser)

export default router;