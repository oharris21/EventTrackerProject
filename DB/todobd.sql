-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tododb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tododb` ;

-- -----------------------------------------------------
-- Schema tododb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tododb` DEFAULT CHARACTER SET utf8 ;
USE `tododb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `enabled` TINYINT NOT NULL,
  `role` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `todo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `todo` ;

CREATE TABLE IF NOT EXISTS `todo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task` VARCHAR(55) NOT NULL,
  `description` TEXT NULL,
  `completed` TINYINT NULL,
  `user_id` INT(11) NOT NULL,
  `due_date` VARCHAR(50) NULL,
  `complete_date` VARCHAR(50) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id1` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_todo_user_idx` (`user_id1` ASC),
  CONSTRAINT `fk_todo_user`
    FOREIGN KEY (`user_id1`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS todouser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'todouser'@'localhost' IDENTIFIED BY 'todouser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'todouser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
