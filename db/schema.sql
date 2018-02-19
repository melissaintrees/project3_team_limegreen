### Schema

USE futureCoders;

CREATE TABLE users
(
	id INT AUTO_INCREMENT primary key,
	user_name varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	email varchar(255) NOT NULL
);
