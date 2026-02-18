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


// It tells Express where all the view templates like EJS files are located
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/assets', express.static('assets'));

app.use(session({
    name: "freeze_session",
    secret: "freeze-secret-123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,    // 🔥 localhost ke liye MUST
      maxAge: 1000 * 60 * 60 * 24   // 1 day
    }
  }));

  app.use((req, res, next) => {
    console.log("SESSION GLOBAL:", req.session.user);
    res.locals.user = req.session.user || null;
    next();
  });
  



// Route
import Router from './route/home.route.js';
app.use(Router);

app.listen('3000',()=>{
    console.log('Server is start')
});




