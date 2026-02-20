import express from 'express';
import {Index} from '../../controller/AdminController/HomeController.js';



export const AdminHomeRoute =  express.Router();


AdminHomeRoute.get('/admin',Index);



export default AdminHomeRoute;