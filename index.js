const PouchDB = require('pouchdb-http')

const faker = require('faker')
const meds = require('./gen-medications')
const patients = require('./create-patients')
const doctors = require('./create-doctors')
const { head } = require('ramda')
 
// build database
const url = head(process.argv.slice(2)) || 'http://localhost:5984/simrx'
const db = PouchDB(url)

// generate Medications SBD and SCD
meds()
  .then(meds => db.bulkDocs(meds))
  .then(res => {
    console.log('add/updated meds', res.length)
  })
  .catch(err => console.log(err))

// generate patients
db.bulkDocs(patients(2000))
  .then(res => {
    console.log('patients', res.length)
  })
  .catch(err => console.log(err))

// generate doctors
db.bulkDocs(doctors(200))
  .then(res => {
    console.log('doctors', res.length)
  })
  .catch(err => console.log(err))
