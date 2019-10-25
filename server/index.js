require('dotenv').config();
const express = require('express');
const massive = require('massive');

const {getAllHouses, createHouse} = require('./controller')

const app = express();

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected')
})
.catch(err => console.log(err))

app.use(express.json())

app.get('/api/houses', getAllHouses);
app.post('/api/houses', createHouse);
app.delete('/api/houses/:id', deleteHouse);
app.get('/api/house/:id', getOneHouse);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})