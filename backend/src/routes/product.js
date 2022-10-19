import { Router } from "express";
import { createProduct } from "../controller/product.js";

const router = Router();

router.post("/", createProduct);

export default router;