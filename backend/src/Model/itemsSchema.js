import { Schema, model } from 'mongoose';

function validationObject(name) {
    return ({
        type: String,
        require: [true, `${name} is required`]
    })
}

const ItemsSchema = Schema({
    name: validationObject('name'),
    email: {
        ...validationObject('email'),
        unique: [true, 'E-mail is already used']
    },
    phoneNumber: validationObject('Phone number'),
    address: validationObject('address'),
    country: validationObject('country'),
    state: validationObject('state'),
    city: validationObject('city'),
    password: validationObject('password'),

});

export default new model('items', ItemsSchema);

