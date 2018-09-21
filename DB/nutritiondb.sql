-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
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
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `current_weight` INT(11) NOT NULL,
  `desired_weight` INT(11) NOT NULL,
  `protein` INT(11) NOT NULL,
  `carbs` INT(11) NOT NULL,
  `fat` INT(11) NOT NULL,
  `notes` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS eventtracker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventtracker'@'localhost' IDENTIFIED BY 'eventtracker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventtracker'@'localhost';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventtracker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `nutrition`
-- -----------------------------------------------------
START TRANSACTION;
USE `nutritiondb`;
INSERT INTO `nutrition` (`id`, `first_name`, `last_name`, `current_weight`, `desired_weight`, `protein`, `carbs`, `fat`, `notes`) VALUES (1, 'Mike', 'Moore', 220, 190, 180, 50, 100, 'cardio every day ');
INSERT INTO `nutrition` (`id`, `first_name`, `last_name`, `current_weight`, `desired_weight`, `protein`, `carbs`, `fat`, `notes`) VALUES (2, 'Shela', 'Wilson', 170, 140, 130, 0, 70, 'no carbs');
INSERT INTO `nutrition` (`id`, `first_name`, `last_name`, `current_weight`, `desired_weight`, `protein`, `carbs`, `fat`, `notes`) VALUES (3, 'Tom', 'Sigrist', 225, 250, 250, 400, 200, 'train 5 days a week ');

COMMIT;

