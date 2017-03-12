const faker = require('faker')
const { times } = require('ramda')
const cuid = require('cuid')

function createPatient () {
  return {
    _id: cuid(),
    type: 'patient',
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    sex: faker.random.arrayElement(['M', 'F']),
    birthDate: faker.date.between(1900, 2000).toISOString(),
    avatar: faker.image.avatar(),
    address: {
      street: faker.address.streetAddress(),
      street2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipCode: faker.address.zipCode()
    },
    phone: faker.phone.phoneNumberFormat()
  }
}

module.exports = times(createPatient)
