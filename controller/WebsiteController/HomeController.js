import { register } from "module";
import Joi from "joi";
import User from "../../models/User.js";
import CategoryModel from "../../models/Category.js";

import bcrypt from 'bcryptjs';


export const Index = async (req, res) => {
    try {

    const data = await Category.findAll ;

    res.render("web/index", { data });

    } catch (error) {
    console.log("REAL ERROR:", error);
    res.send(error.message);
    }
};

export const RegisterUser  = async(req,res)=>{

    return res.render('web/user/register',{name:register});

}

export const RegisterData = async(req,res)=>{

    const{name,email,password} = req.body;

    const schema = Joi.object({
            name: Joi.string().trim().required(),
            email: Joi.string().trim().required(),      
            password: Joi.string().min(6).required(),
            
    }).unknown(true);;

       

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: false,
            message: error.details[0].message,
        });
    }

    const hashPassword  =  await bcrypt.hash(password, 10);

    const user =  await User.create({
        name,
        email,
        password:hashPassword
    })
    //save data in session
    req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email
    };
    console.log(req.session.user);

    req.flash("success","Data registered succesfully");
    return res.redirect("/register");
    
}


 export const LoginUser = async(req,res)=>{

    return res.render('web/user/login');

 }


 export const LoginData = async(req,res)=>{

        const {email,password} = req.body;
        if(!email || !password){
            req.flash("error", "Email and password required");
            return res.redirect("/login");
        }

        const user = await User.findOne({where:{email}});

        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            req.flash("error", "Wrong password");
            return res.redirect("/login");
        }


        // user mil gaya maan ke
        req.session.user = {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            };


        req.flash("success", "Login successful");


        // 5️⃣ Redirect after login
        return res.redirect("/");

    }



    export const  Logout = async(req,res)=>{
  
        req.session.destroy((err) => {
            if (err) {
            console.log("Logout Error:", err);
            return res.redirect("/");
            }
        
            res.clearCookie("freeze_session"); 

            return res.redirect("/login");
        });
    }


    export const Category = async(req,res)=>{

        return res.render('web/category');

    }

    export const About = async(req,res)=>{

       return res.render('web/about');


    }

    export const Contact = async(req,res)=>{

        return res.render('web/contact');

     }
    
     
    export const Cart = async(req,res)=>{
     console.log("helo")
        return res.render('web/cart');
    } 

    


