import { Router } from "express";
import { createProduct, deleteProduct, updateProduct } from "../controller/product.js";

const router = Router();

router.post("/", createProduct);
router.post("/update", updateProduct);
router.delete("/delete", deleteProduct);
export default router;