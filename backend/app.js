const express = require('express');
const router = require('./src/router');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: "./config.env" })
require('./src/connection/db');
app.use(express.json())

app.use(router);
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(process.env.PORT, () => {
    console.log('connected success fully');
})
