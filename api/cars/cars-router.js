const express = require("express");
const router = express.Router();

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
} = require("./cars-middleware");

const Cars = require("./cars-model");

router.get("/", async (req, res, next) => {
  try {
    const getCars = await Cars.getAll();
    res.json(getCars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  res.json(req.carId);
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,

  async (req, res, next) => {
    try {
      const car = await Cars.create(req.body);
      res.json(car);
    } catch (err) {
      next(err);
    }
  }
);

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
