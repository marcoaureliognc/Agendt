const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173', // Cambia esto por el dominio de tu frontend
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ fruits: ['apple', 'banana', 'orange'] });
});

app.listen(8080, () => {
    console.log('Servidor en http://localhost:8080');
});