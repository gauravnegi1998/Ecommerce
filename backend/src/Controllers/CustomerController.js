import customerModel from "../Model/customerSchema.js";

const InsertCustomer = async (req, res) => {
    try {
        // console.log(req?.body)
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

export { InsertCustomer }