const express = require('express');
const morgan = require('morgan');
const { connectDB } = require('./database/config');
require('dotenv').config();

const app = express();

// -- middleware
app.use(morgan('dev'))
app.use(express.json());

const PORT = process.env.APP_PORT || 3000;

app.use('/api/v1', require('./routes'));

async function servidor () {
    await app.listen(PORT);
    console.log(`Servidor ejecutando en el puerto ${PORT} 👍`);
}

connectDB();

servidor();
