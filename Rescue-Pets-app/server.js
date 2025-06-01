// const express = require("express");
import express from "express";
import animalRoutes from "./routes/animalRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import indentifyingRoutes from "./routes/indentifyingRoutes.js";
import medicalRoutes from "./routes/medicalRoutes.js";
import personalityRoutes from "./routes/personalityRoutes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

// set port, listen for requests - Leaving here as a reminder to add it required.

app.use("/api/animal", animalRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/indentifying", indentifyingRoutes);
app.use("/api/medical", medicalRoutes);
app.use("/api/personality", personalityRoutes);

const PORT = process.env.PORT || 8073;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
