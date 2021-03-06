const express = require('express');
const RouterSQL = express.Router();

const client = require('../sql/client');

RouterSQL.get('/areas', async (req, res) => {
    
    const results = await client.query('SELECT * FROM areas');

    res.json({
        areas: results.rows,
        message: 'LISTADO DE TODAS LAS ÁREAS'
    })
});

RouterSQL.post('/asignaturas', async (req, res) => {
    
    const results = await client.query(`SELECT * FROM asignaturas WHERE programas_codigo = ${req.body.programId}`);

    res.json({
        asignaturas: results.rows,
        message: 'LISTADO DE TODAS LAS ASIGNATURAS'
    })
});

RouterSQL.get('/ciudades', async (req, res) => {
    
    const results = await client.query('SELECT * FROM ciudades');

    res.json({
        ciudades: results.rows,
        message: 'LISTADO DE TODAS LAS CIUDADES'
    })
});

RouterSQL.get('/departamentos', async (req, res) => {
    
    const results = await client.query('SELECT * FROM departamentos');

    res.json({
        departamentos: results.rows,
        message: 'LISTADO DE TODOS LOS DEPARTAMENTOS'
    })
});

RouterSQL.post('/empleados', async (req, res) => {
    
    const results = await client.query(`SELECT * FROM empleados WHERE tipo_empleado = 'Profesor' AND identificacion = '${req.body.teacherId}'`);

    res.json({
        empleados: results.rows,
        message: 'LISTADO DE TODOS LOS EMPLEADOS'
    })
});

RouterSQL.get('/facultades', async (req, res) => {
    
    const results = await client.query('SELECT * FROM facultades');

    res.json({
        facultades: results.rows,
        message: 'LISTADO DE TODAS LAS FACULTADES'
    })
});

RouterSQL.post('/grupos', async (req, res) => {
    
    const results = await client.query(`SELECT * FROM grupos WHERE asignaturas_codigo = '${req.body.signatureId}'`);

    res.json({
        grupos: results.rows,
        message: 'LISTADO DE TODOS LOS GRUPOS'
    })
});

RouterSQL.get('/paises', async (req, res) => {
    
    const results = await client.query('SELECT * FROM paises');

    res.json({
        paises: results.rows,
        message: 'LISTA DE TODOS LOS PAISES'
    })
});

RouterSQL.get('/programas', async (req, res) => {
    
    const results = await client.query('SELECT * FROM programas');

    res.json({
        programs: results.rows,
        message: 'LISTADO DE TODOS LOS PROGRAMAS'
    })
});

RouterSQL.get('/sedes', async (req, res) => {
    
    const results = await client.query('SELECT * FROM sedes');

    res.json({
        campus: results.rows,
        message: 'LISTADO DE TODAS LAS SEDES'
    })
});

module.exports = RouterSQL;