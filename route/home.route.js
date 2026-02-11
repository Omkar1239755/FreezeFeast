import express from 'express';
import { Index } from '../controller/HomeController.js';
const Router = express.Router();



Router.get('/',Index)


export default Router;


