import { Router } from "express";
import User from "./user.js";
import Admin from "./admin.js";
import Product from "./product.js";

const router = Router();

router.use("/admin", Admin);
router.use("/product", Product);
router.use("/user", User)

export default router;
