const e = require('express');
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('select * from empleados', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('select * from empleados where id=?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const { id, nombre, salario } = req.body;
    const query = `
    SET @id = ?;
    SET @nombre = ?; 
    SET @salario = ?;
    CALL EmpleadoAddOrEdit(@id, @nombre, @salario);
  `;
    mysqlConnection.query(query, [id, nombre, salario], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empleado Guardado' });
        } else {
            console.log(err);
        }
    })
});

router.put('/:id', (req, res) => {
    const { nombre, salario } = req.body;
    const { id } = req.params;
    const query = `
    CALL EmpleadoAddOrEdit(?, ?, ?);
  `;
    mysqlConnection.query(query, [id, nombre, salario], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empleado Editado' });
        } else {
            console.log(err);
        }
    })
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = `
    delete from empleados where id=?
  `;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empleado Eliminado' });
        } else {
            console.log(err);
        }
    })
});

module.exports = router;