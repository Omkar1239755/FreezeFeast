import { register } from "module";
import {Joi} from "joi";
import User from "../models/User.js";
import bcrypt from 'bcryptjs';


export const Index = async(req,res)=>{

    return res.render("web/index",{name:"omkar"});

}

export const RegisterUser  = async(req,res)=>{

    return res.render('web/user/register',{name:register});

}



export const RegisterData = async(req,res)=>{

    const{name,email,password} = req.body;
    
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),      
        password: Joi.string().min(6).required(),
    });

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


}