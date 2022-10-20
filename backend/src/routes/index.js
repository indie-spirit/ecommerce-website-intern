import { Router } from "express";
import User from "./user.js";
import Users from "./users.js";
import Admin from "./admin.js";
import Admins from "./admins.js";
import Product from "./product.js";

const router = Router();

router.use("/admin", Admin);
router.use("/admins", Admins);
router.use("/product", Product);
router.use("/user", User);
router.use("/users", Users);

export default router;
