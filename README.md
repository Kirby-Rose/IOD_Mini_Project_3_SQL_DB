# IOD_Mini_Project_3_SQL_DB

SQL Database for with API Service.

to run app:

> npm install express
> npm install dotenv
> npm install sequelize --save
> npm install mysql2 --save

Require .env file:

DB_NAME=rescuePets
DB_USER=\***\*
DB_PASSWORD=\*\*\***
DB_HOST=localhost
DB_PORT=3404
PORT=8073

SQL DB Queries

SELECT breed, petName
FROM animals
WHERE birthdate > '2020-01-01';

SELECT animalId, breed, petName, birthdate
FROM animals
WHERE animals.animalId IN (
SELECT identifying.animalId
FROM identifying
WHERE size = "Medium" );

SELECT breed, petName
FROM animals
INNER JOIN
identifying ON ( animals.animalId = identifying.animalId )
INNER JOIN
personality ON ( animals.animalId = personality.animalId )
WHERE
1=1
AND
identifying.size = "Large"
AND
personality.livedWithChildren = "Yes";
