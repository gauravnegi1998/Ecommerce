import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

function validationObject(name, required = true) {
    return ({
        type: String,
        required: [required, `${name} is required`],
        default: "",
        trim: true
    })
}

const customerSchema = mongoose.Schema({
    firstName: validationObject('firstName'),
    lastName: validationObject('lastName'),
    email: {
        ...validationObject('email'),
        unique: [true, 'E-mail is already used'],
        validate: [validator.isEmail, 'invalid email']
    },
    phoneNumber: validationObject('Phone number'),
    address: validationObject('address'),
    country: validationObject('country'),
    state: validationObject('state'),
    city: validationObject('city'),
    password: validationObject('password'),
    birthday: validationObject('birthday'),
    zipCode: validationObject('zipCode'),
    role: {
        type: String,
        default: 'lead',
        enum: {
            values: ['admin', 'subadmin', 'customer', 'lead'],
            message: `{VALUE} is not supported`
        }
    },
    isUserLogin: { type: Boolean, default: true },
    address2: validationObject('address2', false),
    profileImage: validationObject('profileImage', false),
    meta: {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updateAt: {
            type: Date,
            default: Date.now,
        },
        passwordChangeAt: Date,
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

customerSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName
})

customerSchema.pre('save', async function (next) {
    if (this.password) {
        // Store hash in your password DB.
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
});

customerSchema.pre('create', async function (next) {
    if (this.password) {
        // Store hash in your password DB.
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
});

customerSchema.methods.isPasswordChange = async function (jwtTimeStamp) {
    if (this.passwordChangeAt) {
        const PASSWORD_CHANGE_TIME_STEMP = parseInt(this.passwordChangeAt?.getTime() / 1000);
        return jwtTimeStamp < PASSWORD_CHANGE_TIME_STEMP
    }
    return false;
}


const customerModel = new mongoose.model('CUSTOMER', customerSchema);

export default customerModel;

