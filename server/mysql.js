const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'k5w4m8',
  database: 'pets'
});

const fs = require('fs')

const connect = () => {
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL Server!');
      });
};

const CREATE_PET_TABLE = `CREATE TABLE IF NOT EXISTS Pets(
    name VARCHAR(100) NOT NULL,
    type VARCHAR(100),
    sex VARCHAR(100),
    breed VARCHAR(100),
    size ENUM('XS', 'S', 'M', 'L', 'XL', 'N/A'),
    furLength ENUM('short', 'medium', 'long', 'N/A'),
    ageRange VARCHAR(100),
    age VARCHAR(100),
    kidsOK ENUM('Y', 'N', 'N/A'),
    indoorsOnly ENUM('Y', 'N', 'N/A'),
    apartmentOK ENUM('Y', 'N', 'N/A'),
    houseTrained ENUM('Y', 'N', 'N/A'),
    catsOK ENUM('Y', 'N', 'N/A'),
    dogsOK ENUM('Y', 'N', 'N/A'),
    bonded ENUM('Y', 'N', 'N/A'),
    specialNeeds ENUM('Y', 'N', 'N/A'),
    location VARCHAR(255),
    description VARCHAR(255),
    websiteLink VARCHAR(255),
    email VARCHAR(100),
    profilePic VARCHAR(255),
    PRIMARY KEY (name, type, sex, breed)
    )`;

const populateTable = () => {
    const insert = `INSERT INTO pets.pets SET name = ?, type = ?, sex = ?,
  breed = ?, size = ?, furlength = ?, ageRange = ?, age = ?, kidsOK = ?, indoorsOnly = ?, apartmentOK = ?,
  houseTrained = ?, catsOK = ?, dogsOK = ?, bonded = ?, specialNeeds = ?, location = ?,
  description = ?, websiteLink = ?, email = ?`;

    var {parse} = require('csv-parse');

    fs.readFile("./data/pet_tuples.csv", (err, fileData) => {
        parse(fileData, {columns: false, trim: true}, (err, rows) => {
            for (var i=1; i<rows.length; i++) {
                const insertArgs = rows[i]
                connection.query(insert, insertArgs, (error, result, fields) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Database populated successfully")
                    }
                })
            }
        })
    })
}

// connect to the database and init table, populate table
const initDB = () => {
    try {
        connect();
        connection.query(CREATE_PET_TABLE, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
          });
        populateTable();

    } catch(error) {
        console.log(error)
    }
}

// sample URL that would be parsed into an SQL SELECT query
// http://localhost:5000/adoptablepets?ageRange=young,adult&sex=F&type=dog,cat&size=M&furLength=short&distance=100
const queryPets = (ageRange, sex, type, size, furLength, distance) => {

    let queryString = `SELECT * FROM pets.pets WHERE `;

    queryString = queryString.concat(`(`)
    for (let i=0; i<ageRange.length; i++) {
        if (i<ageRange.length-1) {
            queryString = queryString.concat(`ageRange = ? OR `);
        } else {
            queryString = queryString.concat(`ageRange = ?`);
        }  
    }
    queryString = queryString.concat(`) AND `)

    queryString = queryString.concat(`(`)
    for (let i=0; i<sex.length; i++) {
        if (i<sex.length-1) {
            queryString = queryString.concat(`sex = ? OR `);
        } else {
            queryString = queryString.concat(`sex = ?`);
        }
    }
    queryString = queryString.concat(`) AND `)

    queryString = queryString.concat(`(`)
    for (let i=0; i<type.length; i++) {
        if (i<type.length-1) {
            queryString = queryString.concat(`type = ? OR `);
        } else {
            queryString = queryString.concat(`type = ?`);
        }   
    }
    queryString = queryString.concat(`) AND `)

    queryString = queryString.concat(`(`)
    for (let i=0; i<size.length; i++) {
        if (i<size.length-1) {
            queryString = queryString.concat(`size = ? OR `);
        } else {
            queryString = queryString.concat(`size = ?`);
        }
    }
    queryString = queryString.concat(`) AND `)

    queryString = queryString.concat(`(`)
    for (let i=0; i<furLength.length; i++) {
        if (i<furLength.length-1) {
            queryString = queryString.concat(`furLength = ? OR `);
        } else {
            queryString = queryString.concat(`furLength = ?`);
        }
    }
    queryString = queryString.concat(`)`)

    let queryArgs = ageRange.concat(sex, type, size, furLength);

    return new Promise((resolve, reject) => {
        connection.query(queryString, queryArgs, (error, result, fields) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result)
            }
        })
    })
}

module.exports = {
    initDB,
    queryPets
}