import express from 'express';
import {Index,Category} from '../../controller/AdminController/HomeController.js';

export const AdminHomeRoute =  express.Router();


AdminHomeRoute.get('/admin',Index);
AdminHomeRoute.get('/add-category',Category);



export default AdminHomeRoute;