import express from 'express';
import { Index,RegisterUser,RegisterData,LoginUser,LoginData,Logout,Category,About,Contact,Cart } 
from '../../controller/WebsiteController/HomeController.js';


const Router = express.Router();

// cutom middleware
const midlleware = (req,res,next)=>{
   console.log("middlware run") ;
   next();
}


Router.get('/',midlleware,Index)

Router.get('/register',RegisterUser)

Router.post('/register',RegisterData)
Router.get('/login',LoginUser)
Router.post('/login',LoginData)
Router.get('/logout',Logout)
Router.get('/category',Category);
Router.get('/about',About);
Router.get('/contact',Contact);

Router.get('/cart',Cart);



export default Router;


