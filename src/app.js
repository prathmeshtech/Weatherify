const express = require('express');
const app = express();
const port = process.env.PORT || 8000 ;   // we are running aur website on localhost:/8000
const path = require('path');   
const hbs = require('hbs');

const partials_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partials_path);


// public static website path
const template_path = path.join(__dirname,"../templates/views");
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));              

//hbs template view engine
app.set('view engine', 'hbs');
app.set('views', template_path);
    
//routing 
app.get("/", (req,res) => {
    try {
        res.render('index')
    } catch (error) {
        console.log(error);
    }
})

app.get("/about", (req,res) => {
    res.render('about')
})

app.get("/weather", (req,res) => {
    res.render('weather') 
})

app.get("*", (req,res) => {
    res.render('404error')
})
app.listen(port, () => {
    console.log(`listening the port ${port}`) 
})