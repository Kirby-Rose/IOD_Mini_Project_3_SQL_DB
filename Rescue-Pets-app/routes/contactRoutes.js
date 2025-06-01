import express from "express";
import { contactController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  contactController.getContacts(res);
});

router.post("/create", (req, res) => {
  contactController.createContact(req.body, res);
});

router.put("/:id", (req, res) => {
  contactController.updateContact(req, res);
});

router.delete("/:id", (req, res) => {
  contactController.deleteContact(req, res);
});

export default router;
