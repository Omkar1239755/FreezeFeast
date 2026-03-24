import Joi from "joi";
import CategoryModel from "../../models/Category.js";
    

export const Category = async (req, res) => {

    const data =  await CategoryModel.findAll();
    res.render("admin/category/index",{data:data});

};

export const addCategory = async (req, res) => {
  res.render("admin/category/add");
};

export const storeCategory = async (req, res) => {
   try {
 
     const { category_name } = req.body;
     const image = req.file ? req.file.filename : null;
 
     const schema = Joi.object({
       category_name: Joi.string().required()
     });
 
     const { error } = schema.validate(req.body);
 
     if (error) {
       return res.status(400).json({
         status: false,
         message: error.details[0].message
       });
     }
 
     await CategoryModel.create({
       category: category_name,
       image: image
     });
 
     res.redirect("/admin/category");
 
   } catch (err) {
     console.log("REAL ERROR:", err);  
     res.send(err.message);
   }
 };

export const getFood = async(req,res)=>{
try {
    return res.render('admin/food/index');
    } catch (error) {
    res.send(error.message); 
   }
}

export const addFood = async(req,res)=>{
    try {
      const category = await CategoryModel.findAll();
      console.log(category);
      return res.render('admin/food/add',{categories:category})
    } catch (error) {
      res.send(error.message); 
    }
}

export const storeFood = async(req,res)=>{

  try {


    

      
  } catch (error) {
      res.send(error.message); 
    
  }

}
