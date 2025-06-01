import express from "express";
import { personalityController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  personalityController.getPersonalitys(res);
});

router.post("/create", (req, res) => {
  personalityController.createPersonality(req.body, res);
});

router.put("/:id", (req, res) => {
  personalityController.updatePersonality(req, res);
});

router.delete("/:id", (req, res) => {
  personalityController.deletePersonality(req, res);
});

export default router;
