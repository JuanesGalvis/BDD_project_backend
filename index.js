const express = require('express');
const CORS = require('cors');
const app = express();
require('dotenv').config();

require('./utils/auth/index');

app.use(CORS());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("BIENVENIDOS A EvalPoli");
})

app.use(require('./routes/routerMongo'));
app.use(require('./routes/routerSQL'));

app.listen(process.env.PORT || 3005, () => {
    console.log("Servidor corriendo en el puerto "+process.env.PORT);
})