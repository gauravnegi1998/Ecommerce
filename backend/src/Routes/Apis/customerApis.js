import { Router } from 'express';
import { InsertCustomer, _getAllCustomerData } from '../../Controllers/CustomerController.js';

const studentApiRouter = Router();

studentApiRouter.route('/')
    .get(_getAllCustomerData)
    .post(InsertCustomer);

studentApiRouter.route(':id')
    .get(async (req, res) => {
        res.status(200).json({ id: req?.id })
    })
    .put(async (req, res) => {

    })


export default studentApiRouter;    