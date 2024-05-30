const mongoose = require('mongoose');

function validationObject(name) {
    return ({
        type: String,
        require: [true, `${name} is required`]
    })
}

const customerSchema = mongoose.Schema({
    name: validationObject('name'),
    email: {
        ...validationObject('email'),
        unique: [true, 'E-mail is already used'],
    },
    phoneNumber: validationObject('Phone number'),
    address: validationObject('address'),
    country: validationObject('country'),
    state: validationObject('state'),
    city: validationObject('city'),
    password: validationObject('password'),
    username: validationObject('username'),
    refferal: validationObject('refferal'),
    webAlies: {
        ...validationObject('webAlies'),
        unique: [true, 'webAlies is already used']
    },
    isUserLogin: { type: Boolean },
    address1: validationObject('address1'),
    address2: validationObject('address2'),
});

module.exports = new mongoose.model('CUSTOMER', customerSchema);

