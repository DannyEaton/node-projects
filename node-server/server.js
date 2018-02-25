const express = require('express');
let app = express();
app.get("/",(req,res)=>{

    res.send({
        name: 'Daniel Eaton',
        likes:[
            'Reading',
            'Weightlifting',
            'Node'
        ]
    });
});


app.get('/about',(req, res)=>{

    res.send("<h1>AYYYYYYYYYYYYYYYYYYY</h1>");

});


app.get('/bad', (req,res)=>{
   res.send({
       errorMessage: 'Dood you fucked up doody'
   })
});

app.listen(3000);