import express from "express";
import { medicalController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  medicalController.getMedicals(res);
});

router.post("/create", (req, res) => {
  medicalController.createMedical(req.body, res);
});

router.put("/:id", (req, res) => {
  medicalController.updateMedical(req, res);
});

router.delete("/:id", (req, res) => {
  medicalController.deleteMedical(req, res);
});

export default router;
