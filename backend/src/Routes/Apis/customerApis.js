import { Router } from 'express';
import { InsertCustomer, _getAllCustomerData, _getSingleCustomerData } from '../../Controllers/CustomerController.js';

const customerApiRouter = Router();

customerApiRouter.route('/')
    .get(_getAllCustomerData)
    .post(InsertCustomer);


customerApiRouter.route('/:id')
    .get(_getSingleCustomerData)



export default customerApiRouter;    