const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 

const {initDB} = require('./mysql')
const {queryPets} = require('./mysql')

initDB();

// code snippet by https://stackoverflow.com/a/18311469
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 

// Uses input from client to construct a query for the database
app.get('/adoptablepets',  async (req, res) => {
  const ageRange = req.query.ageRange.split(",");
  const sex = req.query.sex.split(",");
  const type = req.query.type.split(",");

  
  const size = req.query.size.split(",");
  const furlengths = req.query.furLength.split(",");
  const distance = req.query.distance;
  
  results = await queryPets(ageRange, sex, type, size, furlengths, distance);

  if (results.length === 0) {
    res.status(404).send('No results.')
  } else {
    res.status(200).send(results)
  }
 
});

app.post('/newpet', (req, res) => {

  const insert = `INSERT INTO pets.pets SET petID = ?, name = ?, type = ?, sex = ?,
  breed = ?, size = ?, furlength = ?, age = ?, ageRange = ?, kidsOK = ?, apartmentOK = ?,
  houseTrained = ?, catsOK = ?, dogsOK = ?, bonded = ?, specialNeeds = ?, location = ?,
  description = ?, websiteLink = ?, profilePic = ?, shelter`;
  const insertArgs = [req.params.ID, req.params.name, req.params.type, req.params.sex, req.params.breed,
  req.params.size, req.params.furlength, req.params.age, req.params.ageRange, req.params.kidsOK, req.params.apartmentOK,
req.params.houseTrained, req.params.catsOK, req.params.dogsOK, req.params.bonded, req.params.specialNeeds,
req.params.location, req.params.description, req.params.websiteLink, req.params.profilePic, req.params.shelter];
});

