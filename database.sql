CREATE TABLE users (
    `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `mail` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `rank` VARCHAR(255) NOT NULL
);

CREATE TABLE profiles (
    `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `id_user` INT(10) NOT NULL,
    `username` VARCHAR(32) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE games (
    `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `release_date` DATETIME NOT NULL
);

CREATE TABLE profiles_games (
    `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `id_profile` INT(10) NOT NULL,
    `id_game` INT(10) NOT NULL,
    FOREIGN KEY (id_profile) REFERENCES profiles(id),
    FOREIGN KEY (id_game) REFERENCES games(id)
);

CREATE TABLE platforms (
    `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE platforms_games (
    `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `id_platform` INT(10) NOT NULL,
    `id_game` INT(10) NOT NULL,
    FOREIGN KEY (id_game) REFERENCES games(id),
    FOREIGN KEY (id_platform) REFERENCES platforms(id)
);

CREATE TABLE types (
    `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE types_games (
    `id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `id_type` INT(10) NOT NULL,
    `id_game` INT(10) NOT NULL,
    FOREIGN KEY (id_type) REFERENCES types(id),
    FOREIGN KEY (id_game) REFERENCES games(id)
);