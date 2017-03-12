const faker = require('faker')
const { times } = require('ramda')
const cuid = require('cuid')

function createDoctor () {
  return {
    _id: cuid(),
    type: 'doctor',
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
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

module.exports = times(createDoctor)
