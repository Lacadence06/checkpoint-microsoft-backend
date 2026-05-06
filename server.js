import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

/* données mocker */
let cars = [
  { id: 1, name: "Toyota", price: 10000 },
  { id: 2, name: "BMW", price: 20000 }
];



// GET all cars
app.get("/api/cars", (req, res) => {
  res.json(cars);
});

// ADD car
app.post("/api/cars", (req, res) => {
  const newCar = {
    id: Date.now(),
    ...req.body
  };

  cars.push(newCar);
  res.json(newCar);
});

// DELETE car
app.delete("/api/cars/:id", (req, res) => {
  const id = Number(req.params.id);
  cars = cars.filter(car => car.id !== id);

  res.json({ message: "Car deleted" });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});