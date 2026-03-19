  import express from 'express';
  import dotenv from 'dotenv'
  import path from 'path'
  import session from "express-session";
  import flash from "connect-flash";

  dotenv.config();
  const app = express();

  //middleware
  app.set('view engine','ejs');

  //Where views live
  app.set("views", path.join(process.cwd(), "view"));
  app.use(express.static('public'));


  // It tells Express where all the view templates like EJS files are located
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  app.use('/assets', express.static('assets'));
  // Category images
  app.use('/category', express.static('public/category'));


  app.use(session({
      name: "freeze_session",
      secret: "freeze-secret-123",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,  
        maxAge: 1000 * 60 * 60 * 24   // 1 day
      }
    }));


    app.use((req, res, next) => {
      res.locals.user = req.session.user || null;
      next();
    });


  app.use(flash());



  // Route
import Router from './route/Website/home.route.js';
app.use(Router);

import AdminHomeRoute from './route/Admin/home.route.js';
app.use('/admin',AdminHomeRoute); 


  app.listen('3000',()=>{
      console.log('Server is start')
  });



