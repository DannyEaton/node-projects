const express = require('express');
let app = express();
let hbs = require('hbs');

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));


app.get("/",(req,res)=>{

    res.render('home.hbs', {
        pageTitle: 'About Page Rendered',
        currentYear: new Date().getFullYear()+1,
        welcomeMessage: 'Welcome User'
    })
});


app.get('/about',(req, res)=>{

    res.render('about.hbs',{
        pageTitle: 'About Page Rendered',
        currentYear: new Date().getFullYear()+1
    });

});


app.get('/bad', (req,res)=>{
   res.send({
       errorMessage: 'This is representative of a bad request'
   })
});

app.listen(3000, ()=>{
    console.log("Server is up on port:3000")
});