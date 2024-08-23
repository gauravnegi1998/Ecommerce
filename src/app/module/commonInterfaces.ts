export interface ICountryStateError {
    countryError: string;
    stateError: string
}


export interface ICustomerData {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    country: string;
    state: string;
    city: string;
    password: string;
    birthday: string;
    zipCode: string;
    isUserLogin: boolean;
    address2: string;
}

export interface IReviewData {
    _id: string;
    productId: string;
    customer: ICustomerData;
    ratingNumber: number;
    ratingMessage: string;
    createdAt: Date
}

export interface IProductData {
    _id: string;
    name: string;
    itemId: number;
    normalImage: string
    largeImage: string;
    mediumImage: string;
    smallImage: string;
    itemCode: string;
    hideFromAdmin: boolean;
    hideFromWeb: boolean;
    returnPolicy: string;
    isEligibleForAutoOrder: boolean;
    webCategories: { _id: string; categoryId: number; categoryName: string }[];
    reviews: IReviewData[] | [];
    description: string;
    price: {
        normalPrice: string;
        offerPrice: string;
    };
    avaliableStock: number;
    minimumOrderQuantity: number;
}


export interface IProductDataQty extends IProductData {
    quantity: number;
}