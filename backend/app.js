import express, { json } from 'express';
import { config } from 'dotenv';
const app = express();
import { join, dirname } from 'path';
import _ from 'lodash';
import router from './src/router/index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: "./config.env" })
import './src/connection/db.js';

const PUBLIC_DATA = join(__dirname, 'public');
app.locals._ = _;

app.use(json());
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
