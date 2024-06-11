const express = require('express');
const router = require('./src/router');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const _ = require('lodash');

dotenv.config({ path: "./config.env" })
require('./src/connection/db');

const PUBLIC_DATA = path.join(__dirname, 'public');
app.locals._ = _;

app.use(express.json());
app.use(express.static(PUBLIC_DATA));

app.use(router);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

// res.sendFIle(`${PUBLIC_DATA}/about.html`) - sendFile use to direct open a static file

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/data', (req, resp) => {
    const user = {
        name: "Gaurav Negi",
        email: "gaurav@csgroupchd.com",
        phoneNumber: "9874584895"
    }
    resp.render('profile', { user })
})
app.listen(process.env.PORT, () => {
    console.log('connected success fully');
})
