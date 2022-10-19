import { Router } from "express";

import Admin from "./admin.js";
import Product from "./product.js";

const router = Router();

router.use("/admin", Admin);
router.use("/product", Product);

export default router;
