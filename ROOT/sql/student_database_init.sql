-- Student Database Initialization SQL Script --

-- Creating a Student Database Table in the STEM db Schema -- 
CREATE TABLE `stemdb`.`student_id_table` (
  `student_ID` INT NOT NULL,
  `first_name` VARCHAR(60) NOT NULL,
  `last_name` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`student_ID`));