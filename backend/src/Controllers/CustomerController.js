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
        console.error(err)
    }
}

const _getAllCustomerData = async (req, res) => {
    try {
        const AllCustomerData = await customerModel.find();
        res.status(200).json({ status: 'ok', data: AllCustomerData });
    } catch (err) {
        res.status(400).json({ status: 'error', message: 'something went wrong', data: err });
    }
}

export { InsertCustomer, _getAllCustomerData };