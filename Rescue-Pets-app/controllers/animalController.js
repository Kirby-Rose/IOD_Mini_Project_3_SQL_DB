"use strict";
import { Animal } from "../models/index.js";
import sequelize from "../dbConnect.js";

const getAnimals = (res) => {
  Animal.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createAnimal = (data, res) => {
  Animal.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateAnimal = (req, res) => {
  Animal.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteAnimal = (req, res) => {
  Animal.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getAnimalBySize = async (req, res) => {
  try {
    const results = await sequelize.query(
      `
     SELECT animalId, breed, petName, birthdate
     FROM animals
     WHERE animals.animalId IN (
     SELECT identifying.animalId
     FROM identifying
     WHERE size = "${req.params.size}" );
     `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    if (results.length === 0) {
      return res.status(404).json({ error: "No animals found" });
    }
    console.log(results);
    res.json(results);
  } catch (err) {
    console.error("Raw query error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAnimalBySizeAndKids = async (req, res) => {
  try {
    const results = await sequelize.query(
      `
     SELECT breed, petName
        FROM animals
        INNER JOIN 
        identifying ON animals.animalId = identifying.animalId 
        INNER JOIN 
        personality ON animals.animalId = personality.animalId 
        WHERE 
        identifying.size = :size
        AND
        personality.livedWithChildren = :livedWithChildren
     `,
      {
        replacements: {
          size: req.params.size,
          livedWithChildren: req.params.livedWithChildren,
        },
        type: sequelize.Sequelize.QueryTypes.SELECT,
      }
    );
    if (results.length === 0) {
      return res.status(404).json({ error: "No animals found" });
    }
    console.log(results);
    res.json(results);
  } catch (err) {
    console.error("Raw query error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalBySize,
  getAnimalBySizeAndKids,
};
