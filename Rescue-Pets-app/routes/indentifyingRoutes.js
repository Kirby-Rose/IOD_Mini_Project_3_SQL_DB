import express from "express";
import { identifyingController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  identifyingController.getIdentifyings(res);
});

router.post("/create", (req, res) => {
  identifyingController.createIdentifying(req.body, res);
});

router.put("/:id", (req, res) => {
  identifyingController.updateIdentifying(req, res);
});

router.delete("/:id", (req, res) => {
  identifyingController.deleteIdentifying(req, res);
});

export default router;
