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
import session from 'express-session';
import MongoStore from 'connect-mongo';
import morgan from 'morgan';
import CustomError from './src/Utils/CustomError.js';
import globalErrorHandler from './src/Utils/globalErrorHandler.js';

//it will not handle error inside the express only work outside error like x is not define. it is neccessay to end the process because that time node is on unclean state

process.on('uncaughtException', (err) => {
    console.log(err?.name, err?.message);
    process.exit();
})

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
app.use(morgan('dev'))
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

app.all('*', (req, res, next) => {
    const error = new CustomError(`Can't find ${req.originalUrl} on the server`, 404)
    next(error);
});

app.use(globalErrorHandler);
// app.get('/customers', async (req, resp) => {
//     try {
//         const AllCustomerData = await customerModel.find();
//         console.log(AllCustomerData, 'AllCustomerDataAllCustomerDataAllCustomerDataAllCustomerData')
//         resp.render('userListing', { data: AllCustomerData });
//     } catch (err) {
//         resp.status(400).json({ status: 'error', message: 'something went wrong', data: err });
//     }
// })
const server = app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log('connected success fully');
})



// handle reject promises globally

process.on('unhandledRejection', (err) => {
    console.log(err?.name, err?.message);

    server.close(() => {
        process.exit();
    })

})
