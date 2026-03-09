import express from 'express';
import {Category,addCategory,storeCategory} from '../../controller/AdminController/HomeController.js';
import {upload} from '../../middleware/upload.js'

export const AdminHomeRoute =  express.Router();



AdminHomeRoute.get('/category',Category);
AdminHomeRoute.get('/add-category', addCategory);
// multer middle ware 
AdminHomeRoute.post('/add-category',upload.single("image"),storeCategory);

export default AdminHomeRoute;