-- SQL Script for Daily Check-in Databae Initilization --

--Creating STEM database for all tables
CREATE SCHEMA `stem_db` ;

-- Creating a table to store the Daily Check-in Data
CREATE TABLE `stemdb`.`daily_checkin` (
  `student_ID` INT(9) NOT NULL,
  `first_name` VARCHAR(60) NOT NULL,
  `last_name` VARCHAR(60) NOT NULL,
  `date` DATE NOT NULL,
  `mood_score` INT(2) NOT NULL,
  `mood_word` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`student_ID`));
