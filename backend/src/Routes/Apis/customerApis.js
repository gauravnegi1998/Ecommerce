import { Router } from 'express';
import { InsertCustomer, _deleteCustomerById, _getAllCustomerData, _getSingleCustomerData, _updateCustomerData } from '../../Controllers/CustomerController.js';

const customerApiRouter = Router();

customerApiRouter.route('/')
    .get(_getAllCustomerData)
    .post(InsertCustomer);


customerApiRouter.route('/:id')
    .get(_getSingleCustomerData)
    .put(_updateCustomerData)
    .delete(_deleteCustomerById)

export default customerApiRouter;    