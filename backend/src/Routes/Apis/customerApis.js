import { Router } from 'express';
import { InsertCustomer, _deleteCustomerById, _getAllCustomerData, _getSingleCustomerData, _updateCustomerData } from '../../Controllers/CustomerController.js';
import AuthCheck from '../../middleware/AuthCheck.js';

const customerApiRouter = Router();

customerApiRouter.route('/')
    .get(AuthCheck._checkAuth, AuthCheck.restrict('admin'), _getAllCustomerData)
    .post(InsertCustomer);


customerApiRouter.route('/:id')
    .get(AuthCheck._checkAuth, _getSingleCustomerData)
    .put(AuthCheck._checkAuth, _updateCustomerData)
    .delete(AuthCheck._checkAuth, _deleteCustomerById)

export default customerApiRouter;    