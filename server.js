const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const cors = require('cors');
const membreRoute = require('./routes/membreRoutes');


app.use(cors())
app.use(express.static('client/build'));
app.use(express.json());

app.use('/membresEquipage', membreRoute);

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build,index.html'));
})

app.listen(process.env.PORT, () => console.log(`app started on http://localhost:${process.env.PORT}`));