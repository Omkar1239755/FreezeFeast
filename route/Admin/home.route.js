import express from 'express';
import {Category,addCategory,storeCategory,getFood,addFood,storeFood} from '../../controller/AdminController/HomeController.js';
import {upload} from '../../middleware/upload.js'

export const AdminHomeRoute =  express.Router();



AdminHomeRoute.get('/category',Category);
AdminHomeRoute.get('/add-category', addCategory);
// multer middle ware 
AdminHomeRoute.post('/add-category',upload.single("image"),storeCategory);

AdminHomeRoute.get('/food',getFood);
AdminHomeRoute.get('/add-food',addFood);
AdminHomeRoute.post('/store-food',storeFood);


export default AdminHomeRoute;