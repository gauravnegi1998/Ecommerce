const mongoose = require('mongoose');

function validationObject(name, required = true) {
    return ({
        type: String,
        require: [required, `${name} is required`],
        default: ""
    })
}

const customerSchema = mongoose.Schema({
    firstName: validationObject('firstName'),
    lastName: validationObject('lastName'),
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
    birthday: validationObject('birthday'),
    zipCode: validationObject('zipCode'),
    // refferal: validationObject('refferal'),
    // webAlies: {
    //     ...validationObject('webAlies'),
    //     unique: [true, 'webAlies is already used']
    // },
    isUserLogin: { type: Boolean, default: true },
    address2: validationObject('address2', false),
});

module.exports = new mongoose.model('CUSTOMER', customerSchema);

