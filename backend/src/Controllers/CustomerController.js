import _ from "lodash";
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
        // AllCustomerData = await customerModel.find(req?.query).sort({age:1}); - sort
        // AllCustomerData = await customerModel.find({},{age:1},{limit:5}); - select and limit
        // AllCustomerData = await customerModel.find({age:{$gt:25}}); - greater then  
        /* 
        $gte - greater then and equal, $lt - less then, $lte - less then equal , $ne - not equal , $in:[21,25] - in Array , 
        $nin-[21,24] - not in array ,


        Logical operator
        AllCustomerData = await customerModel.find({$and:[{age: 25},{name:'gaurav'}]}); - and Operator ,
        $or:[{age: 25},{name:'gaurav'}] - or Operator 
        {age: {$not:{$gt:25}}} - not Operator 
        $nor:[{age: 25},{name:'gaurav'}] - nor Operator 
        */

        // {$regex:name,$options:"i"} case sensitive

        const LIMIT = Number(req?.query?.limit) || 6;
        const SKIP = Number(req?.query?.page) ? (Number(req?.query?.page) - 1) * LIMIT : 0;

        let AllCustomerData = [];

        if (!_.isEmpty(req?.query)) {
            if (!req?.query?.all) {
                AllCustomerData = await customerModel.find(_.omit(req?.query, ['limit', 'page'])).skip(SKIP).limit(LIMIT);
                console.log(AllCustomerData, 'OOOOOOOOOOOOOOOOO')
            } else {
                AllCustomerData = await customerModel.find({
                    $or: [
                        { firstName: req?.query?.all }, { lastName: req?.query?.all }, { email: req?.query?.all }, { phone: req?.query?.all }
                    ]
                }).skip(SKIP).limit(LIMIT)

            }
        }

        res.status(200).json({ status: 'ok', data: AllCustomerData, totalCount: AllCustomerData?.length });
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


const _updateCustomerData = async (req, res) => {
    // update data by any parameter :- updateOne({name:'shiv'}, body)
    // update multipleDat by any parameter :- updateMany({age:27}, body)
    try {
        const { params, body } = req;
        const UPDATE_CUSTOMER = await customerModel.findByIdAndUpdate(params?.id, body, { returnDocument: 'after' });
        if (UPDATE_CUSTOMER) {
            res?.status(200).json({ status: 'ok', data: UPDATE_CUSTOMER })
        } else {
            res.status(400).json({ status: 'error', message: 'something went wrong', data: err });
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal sever error', data: err });
    }
}

const _deleteCustomerById = async (req, res) => {
    try {
        const { params } = req;
        const DELETE_USER = await customerModel.findByIdAndDelete(params?.id);
        console.log(DELETE_USER, "ddddddddddddddddddddddd")
        if (DELETE_USER) {
            res.status(200).json({ status: 'ok', message: "user deleted successfully" })
        } else {
            res.status(400).json({ status: 'error', message: "something went wrong" })
        }
    } catch (err) {
        res.status(500).json({ status: 'error', message: "internal server error" })
    }
}

export { InsertCustomer, _getAllCustomerData, _getSingleCustomerData, _updateCustomerData, _deleteCustomerById };