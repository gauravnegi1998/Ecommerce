import { Router } from 'express';
import { InsertCustomer, _deleteCustomerById, _getAllCustomerData, _getSingleCustomerData, _updateCustomerData, _uploadProfileImage } from '../../Controllers/CustomerController.js';
import AuthCheck from '../../middleware/AuthCheck.js';
import upload, { _cloudinaryUploader } from '../../middleware/MulterMiddleWare.js';
import { asyncErrorHandler } from '../../Utils/ErrorsHandlers.js';

const customerApiRouter = Router();

customerApiRouter.route('/')
    .get(AuthCheck._checkAuth, AuthCheck.restrict('admin'), _getAllCustomerData)
    .post(InsertCustomer);


customerApiRouter.route('/:id')
    .get(AuthCheck._checkAuth, _getSingleCustomerData)
    .put(AuthCheck._checkAuth, _updateCustomerData)
    .delete(AuthCheck._checkAuth, _deleteCustomerById)


customerApiRouter.route('/:id/update-profile')
    .put(AuthCheck._checkAuth, upload.single('image'), _cloudinaryUploader, asyncErrorHandler(_uploadProfileImage))

export default customerApiRouter;    