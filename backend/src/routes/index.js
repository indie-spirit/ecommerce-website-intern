import { Router } from "express";

import Admin from "./admin.js";

const router = Router();

router.use("/admin", Admin);

export default router;
