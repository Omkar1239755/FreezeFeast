import express from 'express';
import dotenv from 'dotenv'
import path from 'path'

dotenv.config();

const app = express();

// middleware
app.set('view engine','ejs');
// 👇 Where views live
app.set("views", path.join(process.cwd(), "view"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/assets', express.static('assets'));

import Router from './route/home.route.js';
app.use(Router);


app.listen('3000',()=>{
    console.log('Server is start')
});




