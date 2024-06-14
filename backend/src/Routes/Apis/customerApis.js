import { Router } from 'express';
import { InsertCustomer } from '../../Controllers/CustomerController.js';

const studentApiRouter = Router();

studentApiRouter.route('/')
    .get(async (req, res) => {
        res.status(200).json({ test: 'get' });
    })
    .post(InsertCustomer);

studentApiRouter.route(':id')
    .get(async (req, res) => {
        res.status(200).json({ id: req?.id })
    })
    .put(async (req, res) => {

    })


export default studentApiRouter;    