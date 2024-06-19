import customerModel from "../Model/customerSchema.js";

const InsertCustomer = async (req, res) => {
    try {
        const customerData = new customerModel(req.body);
        customerData.save().then((result) => {
            res.status(201).json({ status: 'ok', message: 'you have successfully sign up.' })
        }).catch((err) => {
            res.status(400).json({ status: 'error', message: 'something went wrong', data: err })
        })
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal sever error', data: err });
    }
}

const _getAllCustomerData = async (req, res) => {
    try {
        // const AllCustomerData = await customerModel.find().select(['name','email']);  include 'name,email' ['name','email'] {name:1,email:1}
        // const AllCustomerData = await customerModel.find().select(['-name','-email']);  exclude '-name,-email' ['-name','-email'] {name:0,email:0};
        const AllCustomerData = await customerModel.find();
        res.status(200).json({ status: 'ok', data: AllCustomerData });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal sever error', data: err });
    }
}

const _getSingleCustomerData = async (req, res) => {
    try {
        const SINGLE_CUSTOMER_DATA = await customerModel.findById(req?.params?.id);
        if (SINGLE_CUSTOMER_DATA) {
            res.status(200).json({ status: 'ok', data: SINGLE_CUSTOMER_DATA })
        } else {
            res.status(400).json({ status: 'error', message: 'something went wrong', data: err });
        }
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Internal sever error', data: err });
    }
}

export { InsertCustomer, _getAllCustomerData, _getSingleCustomerData };