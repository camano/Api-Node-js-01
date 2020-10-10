CREATE DATABASE IF NOT EXISTS  dbpruebas;
USE dbpruebas;
CREATE TABLE empleados(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);


insert into empleados values
(1,'Ryan',10000),
(2,'Joel ',20000),
(3,'John',30000);
