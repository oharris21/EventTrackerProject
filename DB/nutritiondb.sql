-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema nutritiondb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `nutritiondb` ;

-- -----------------------------------------------------
-- Schema nutritiondb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nutritiondb` DEFAULT CHARACTER SET utf8 ;
USE `nutritiondb` ;

-- -----------------------------------------------------
-- Table `nutrition`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nutrition` ;

CREATE TABLE IF NOT EXISTS `nutrition` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `current_weight` INT NOT NULL,
  `desired_weight` INT NOT NULL,
  `protein` INT NOT NULL,
  `carbs` INT NOT NULL,
  `fat` INT NOT NULL,
  `notes` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventtracker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventtracker'@'localhost' IDENTIFIED BY 'eventtracker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventtracker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
