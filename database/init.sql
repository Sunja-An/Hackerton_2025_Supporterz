CREATE DATABASE IF NOT EXISTS JIKANWARI;

USE JIKANWARI;

CREATE TABLE users(
   id INT AUTO_INCREMENT,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   password VARCHAR(255) NOT NULL,
   createdAt TIME,
   PRIMARY KEY(id)
);

CREATE TABLE lectures(
    lecture_id INT AUTO_INCREMENT,
    lecture_name VARCHAR(50) NOT NULL,
    lecture_teacher VARCHAR(50) NOT NULL,
    lecture_day VARCHAR(5) NOT NULL,
    lecture_start_time INT NOT NULL,
    lecture_end_time INT NOT NULL,
    PRIMARY KEY(lecture_id)
);