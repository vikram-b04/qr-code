const express = require('express');
const app = express();
const path = require('path');
const qrcode = require('qrcode');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("images"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));

app.get("/",(req,res)=>{
    res.render('index');
})

app.post('/vikram',(req,res)=>{
    const browserdata = req.body.qrdata

    qrcode.toDataURL(browserdata,(err,output)=>{
        res.render('about',{datavalue:output})
    })
})

app.listen(10000)
