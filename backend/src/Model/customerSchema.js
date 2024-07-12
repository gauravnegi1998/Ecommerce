import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

function validationObject(name, required = true) {
    return ({
        type: String,
        required: [required, `${name} is required`],
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

    isUserLogin: { type: Boolean, default: true },
    address2: validationObject('address2', false),
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


customerSchema.pre('save', async function (next) {
    console.log(this.password, 'ddddddddddddddddddddddddddddddddddddddddd');
    if (this.password) {
        // Store hash in your password DB.
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
});

console.log(customerSchema, 'customerSchemacustomerSchemacustomerSchema')

const customerModel = new mongoose.model('CUSTOMER', customerSchema);

export default customerModel;

