import express from "express";
import { animalController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  animalController.getAnimals(res);
});

router.post("/create", (req, res) => {
  animalController.createAnimal(req.body, res);
});

router.put("/:id", (req, res) => {
  animalController.updateAnimal(req, res);
});

router.delete("/:id", (req, res) => {
  animalController.deleteAnimal(req, res);
});

router.get("/bySize/:size", (req, res) => {
  animalController.getAnimalBySize(req, res);
});

router.get("/bySizeAndKids/:size/:livedWithKids", (req, res) => {
  animalController.getAnimalBySize(req, res);
});

export default router;
