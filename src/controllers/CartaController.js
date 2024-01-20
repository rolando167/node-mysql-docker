const { sequelize } = require('../database/config');
// const Cartas = await sequelize.query("SELECT * FROM `Cartas`", { type: QueryTypes.SELECT });
const { QueryTypes } = require('sequelize');

exports.listadoCartas = async(req, res) => {
    try {
        // const data = await sequelize.query("SELECT * FROM `Cartas`", { type: QueryTypes.SELECT });
        const response = await sequelize.query("SELECT * FROM  carta ");
        res.send(response[0]);
        console.log(response[0]);
    } catch (error) {
        console.log(error);
        // throw new Error('NOOO 😞');
    }
}

exports.storeCarta = async(req, res) =>{
    try {
        const {plato, descripcion, precio, disponible} = req.body;

        const response = await sequelize.query('INSERT INTO CARTA(plato, descripcion, precio, disponible )'
        +' VALUES( ?, ?, ?, ?)', {
            replacements: [plato, descripcion, precio, disponible]
        });
        console.log("🚀", response);
        res.send('Carta Creada ✔️');
    } catch (error) {
        console.log(error);
    }
}

exports.getCarta = async(req, res)=>{
    // http://localhost:3300/api/v1/carta/5
    try {
        const {id} = req.params;
        const response = await sequelize.query('SELECT * from CARTA where id = ?', {
            replacements: [id]
        });
        res.send(response[0]);
    } catch (error) {
        console.log(error);
    }
}

exports.updateCarta = async(req, res)=>{
    try {
        const {id} = req.params;
        const {plato} = req.body;
        // ... `${id}`
        const response = await sequelize.query(`UPDATE CARTA SET plato = ? WHERE id = ?`, {
            replacements: [plato, id]
        });
        res.status(200).json({mensaje: 'Carta Actualizada ✔️'});
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCarta = async(req, res) => {
    try {
        const {id} = req.params;
        const response = await sequelize.query('DELETE FROM CARTA WHERE id=?', {
            replacements: [id]
        });
        res.status(200).json({mensaje: 'CARTA ELIMINADA ✔️'});
    } catch (error) {
        console.log(error);
    }
}