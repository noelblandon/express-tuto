CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL
  );