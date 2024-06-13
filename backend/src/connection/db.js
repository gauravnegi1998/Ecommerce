import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://gsn:root@ecommerce.4m6utoc.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce')
const db = mongoose.connection;

db.on('error', () => console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected successfully')
});