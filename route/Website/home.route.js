import express from 'express';
import { Index,RegisterUser,RegisterData,LoginUser,LoginData,Logout,Category } from '../../controller/WebsiteController/HomeController.js';


const Router = express.Router();

Router.get('/',Index)
Router.get('/register',RegisterUser)
Router.post('/register',RegisterData)
Router.get('/login',LoginUser)
Router.post('/login',LoginData)
Router.get('/logout',Logout)
Router.get('/category',Category);



export default Router;


