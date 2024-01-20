const { sequelize } = require('../database/config');
// const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });


exports.listadoPeronas = async(req, res) => {
    try {
        // const data = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
        const response = await sequelize.query("SELECT * FROM  users ");
        res.send(response[0]);
        console.log(response[0]);
    } catch (error) {
        console.log(error);
        // throw new Error('NOOO 😞');
    }
}