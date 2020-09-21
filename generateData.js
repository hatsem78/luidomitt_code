var faker = require("faker");

var database = { drivers: [] };
/**
 * Genera 50 conducotres para probar el sistema con el rest-api simulandolo
 */
for (var i = 1; i <= 50; i++) {
  database.drivers.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    emailId: faker.internet.email(),
    patent: faker.address.countryCode() + faker.address.zipCode(),
    modelo: faker.company.companyName(),
    years: faker.random.number({
      min: 1980,
      max: 2019,
    }),
  });
}

console.log(JSON.stringify(database));
