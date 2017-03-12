# Simulate Health Database System

Create a couchdb health test database with

* medications
* patients
* doctors

## requirements

* CouchDB

## Create Database

```
npm install
npm run createdb http://localhost:5984/simrx
```

If you don't provide a dburl it will try to use: `http://localhost:5984/simrx`

This command will create a database with 20K plus medication and 2K patients and
200 doctors.

## License

MIT
