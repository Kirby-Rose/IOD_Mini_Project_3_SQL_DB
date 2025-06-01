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

INSERT INTO animals VALUE (1, 'Tabby', 'Whiskers', '2010-10-10', 'allergy to cats'),
(2, 'Siamese', 'Socks', '2015-05-05', 'moving to another country'),
(3, 'Labrador', 'Marley', '2021-01-01', 'more energetic than we can manage'),
(4, 'Poodle', 'Sir Augustus of Yorke', '2022-02-02', 'owner death'),
(5, 'Beagle', 'Chance', '2017-07-07', 'lost dog');

INSERT INTO animals VALUE (6, 'Tabby', 'Mandarin', '2023-03-03', 'unable to keep'),
(7, 'Beagle', 'Spots', '2024-04-04', 'moving house');

INSERT INTO identifying VALUE ('Large', 'Tabby', 'Playful, shy and sleepy', 1),
( 'small', 'Black and Cream', 'Sassy, independant and sweet', 2),
( 'Large', 'Yellow', 'A happy and playfull bundle of energy', 3),
('Medium', 'Black', 'Well trained, obedient, loving but sad', 4),
('Medium', 'White and Tan', 'Smart, energetic and playful', 5);

INSERT INTO identifying VALUE ('Large', 'Tabby', 'Grumpy but sweet', 6),
('Medium', 'White and Tan', 'Clever, playful, mischeivious', 7);

INSERT INTO personality VALUE ('Yes', 'Low', 'None', 'Low', 'Nil','Litterbox trained','Indoor cat only', 1),
( 'No', 'Medium', 'Low', 'Low', 'lead trained','Litterbox trained','Enjoys walking on lead', 2),
('Yes', 'None', 'None', 'High', 'Daily walk','Puppy school and house trained','Single walk daily not enough to stop boredom and bad behaviour', 3),
('No', 'Medium', 'None', 'Low', 'Daily walk','Exceptionally trained to voice and hand commands','Excellent adult companion dog. Well trained for grooming and house broken', 4),
('Yes', 'Low', 'Medium', 'High', 'Daily walk','Basic training and house broken, needs consistency','Found wandering, not chipped and owner not identified.', 5);

INSERT INTO personality VALUE ('Yes', 'Low', 'None', 'Low', 'Nil','Litterbox trained','Indoor cat only', 5),
('Yes', 'Low', 'Medium', 'High', 'Daily walk','Basic training and voice commands','lovely dog, becomes destructive when board and can escape the yard and wander', 6);

INSERT INTO medical VALUE ('Yes', 'Yes', 'Nil', 'Nil', 'Nil', 1),
( 'Yes', 'Yes', 'Nil', 'Nil', 'Nil', 2),
( 'Yes', 'Yes', 'Nil', 'Nil', 'Nil', 3),
('Yes', 'Yes', 'Nil', 'Nil', 'Nil', 4),
('Yes', 'Yes', 'Nil', 'Nil', 'Nil', 5);

INSERT INTO medical VALUE ('Yes', 'Yes', 'Nil', 'Nil', 'Nil', 6),
('Yes', 'Yes', 'Nil', 'Nil', 'Nil', 7);

INSERT INTO contact VALUE ('Marsha Mellow', 'mm@gmail.com', 'Useless Loop Road, WA', '111111111', 1),
( 'Chip Munk', 'cm@gmail.com', 'Come By Chance Road, NSW','292929', 2),
( 'Paige Turner', 'PT@gmail.com', 'Nowhere Else Road, SA','4346343', 3),
('Anita Bath', 'ab@gmail.com', 'Bald Knob Road, QLD','999444333', 4),
('Al OVera', 'AOV@gmail.com', 'Odd Street, NSW','00225588', 5);

INSERT INTO contact VALUE ('Amy Stake', 'as@gmail.com', 'Rode Road, QLD', '65656565', 6),
('Chris P Bacon', 'CPB@gmail.com', 'High Street Road, Vic.','333222444', 7);
