import { Router } from "express";
import { getUsers } from "../controllers/users.controller.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id");
router.post("/");
router.put("/:id");
router.delete("/:id");

export default router;
