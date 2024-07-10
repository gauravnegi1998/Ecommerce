import express, { json } from 'express';
import { config } from 'dotenv';
import { join, dirname } from 'path';
import _ from 'lodash';
import router from './src/Routes/index.js';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: "./config.env" })
import './src/connection/db.js';
import customerModel from './src/Model/customerSchema.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const sessionStorage = MongoStore.create({
    mongoUrl: "mongodb+srv://gsn:root@ecommerce.4m6utoc.mongodb.net",
    dbName: "ecommerce",
    collectionName: "sessions",
    ttl: 20000000000,
    autoRemove: "native"
})

const PUBLIC_DATA = join(__dirname, 'public');
app.locals._ = _;
app.use(cors({ origin: '*' }))
app.use(json());
app.use(express.static(PUBLIC_DATA));
app.use(session({
    secret: 'test34567',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 200000 },
    store: sessionStorage
}))
app.use(router);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

// res.sendFIle(`${PUBLIC_DATA}/about.html`) - sendFile use to direct open a static file

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/customers', async (req, resp) => {
    try {
        const AllCustomerData = await customerModel.find();
        console.log(AllCustomerData, 'AllCustomerDataAllCustomerDataAllCustomerDataAllCustomerData')
        resp.render('userListing', { data: AllCustomerData });
    } catch (err) {
        resp.status(400).json({ status: 'error', message: 'something went wrong', data: err });
    }
})
app.listen(process.env.PORT, () => {
    console.log('connected success fully');
})
