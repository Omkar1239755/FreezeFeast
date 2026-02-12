import express from 'express';
import { Index,RegisterUser,RegisterData } from '../controller/HomeController.js';
const Router = express.Router();



Router.get('/',Index)
Router.get('/register',RegisterUser)
Router.post('/register',RegisterData)


export default Router;


