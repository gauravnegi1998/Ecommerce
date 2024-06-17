export interface ICountryStateError {
    countryError: string;
    stateError: string
}


export interface ICustomerData {
    "_id": string;
    "firstName": string;
    "lastName": string;
    "email": string;
    "phoneNumber": string;
    "address": string;
    "country": string;
    "state": string;
    "city": string;
    "password": string;
    "birthday": string;
    "zipCode": string;
    "isUserLogin": boolean;
    "address2": string;
}