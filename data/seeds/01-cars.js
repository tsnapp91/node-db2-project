// STRETCH
const cars = [
    {
    vin: '1111111111111',
    make: 'chevy',
    model: 'silverado', 
    mileage: 220000,
    title: 'clear',
    transmission: 'automatic'
},
{
    vin: '1111111111112',
    make: 'ford',
    model: 'focus', 
    mileage: 12000,
    title: 'clear',

},
{
    vin: '1111111111113',
    make: 'toyota',
    model: 'camry', 
    mileage: 38000,
  
}
]

export.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}