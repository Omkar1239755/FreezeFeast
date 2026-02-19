import express from 'express';
import { Index,RegisterUser,RegisterData,LoginUser,LoginData,Logout } from '../controller/HomeController.js';


const Router = express.Router();

Router.get('/',Index)
Router.get('/register',RegisterUser)
Router.post('/register',RegisterData)
Router.get('/login',LoginUser)
Router.post('/login',LoginData)
Router.get('/logout',Logout)



export default Router;


