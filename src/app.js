const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const path = require('path');
const news = require('./tools/news');

const publicDir = path.join(__dirname,'../public');
app.use(express.static(publicDir));

app.set('view engine', 'hbs');
const viewsDir = path.join(__dirname,'../templates/views');
app.set('views',viewsDir)

const hbs = require('hbs');
const partialViewsDir = path.join(__dirname,'../templates/partialviews');

hbs.registerPartials(partialViewsDir)
app.get('/',(req,res)=>{
    news((error,data)=>{
        if(error){
            return res.render('index',{error})
        }
        res.render('index',{data})
    })
})
app.get('*',(req,res)=>{
    res.render('error',{error:'page not found'})
})

app.listen(port,()=>{
    console.log(`app listen on port ${port}`)
})