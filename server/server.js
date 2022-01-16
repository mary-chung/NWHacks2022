const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 

const {initDB} = require('./mysql')
const {queryPets} = require('./mysql')

initDB();

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.get('/adoptablepets',  async (req, res) => {
  const ageRange = req.query.ageRange.split(",");
  const sex = req.query.sex.split(",");
  const type = req.query.type.split(",");
  const size = req.query.size.split(",");
  const furlengths = req.query.furLength.split(",");
  const distance = Number(req.query.distance);
  
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

