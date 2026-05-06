import express from "express";
import Car from "../models/car.js";

const router = express.Router();


// GET all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// CREATE car
router.post("/", async (req, res) => {
  try {
    const { name, price } = req.body;

    const car = new Car({
      name,
      price,
    });

    const savedCar = await car.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// DELETE car
router.delete("/:id", async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: "Voiture supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;