-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema viagem
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema viagem
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `viagem` DEFAULT CHARACTER SET utf8 ;
USE `viagem` ;

-- -----------------------------------------------------
-- Table `viagem`.`viagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viagem`.`viagem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` DATETIME NULL,
  `local` VARCHAR(100) NULL,
  `atracoes` VARCHAR(2000) NULL,
  `descricao` VARCHAR(2000) NULL,
  `numero de vagas` INT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `viagem`.`reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viagem`.`reservas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(245) NOT NULL,
  `email` VARCHAR(245) NOT NULL,
  `passagens` INT NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  `viagem_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_reservas_viagem_idx` (`viagem_id` ASC) VISIBLE,
  CONSTRAINT `fk_reservas_viagem`
    FOREIGN KEY (`viagem_id`)
    REFERENCES `viagem`.`viagem` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
