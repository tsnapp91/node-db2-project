// STRETCH
const cars = [
  {
    vin: "11111111111111111",
    make: "chevy",
    model: "silverado",
    mileage: 220000,
    title: "clear",
    transmission: "automatic",
  },
  {
    vin: "11111111111122222",
    make: "ford",
    model: "focus",
    mileage: 12000,
    title: "clear",
  },
  {
    vin: "11111111111133333",
    make: "toyota",
    model: "camry",
    mileage: 38000,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
