const express = require("express");
const moment = require("moment");
const app = express();
require("./controller/mongo")
const db = require("./model/db")
const bodyparser = require("body-parser"); //Middle Ware
const mongoose = require("mongoose")

const data = mongoose.model("data");

//middle ware
app.use(bodyparser.json());



    app.get("/", function(req,res){
        res.send("Hello World");
    });


    
    app.get("/db", function(req,res){
        res.send("Hello")
        });


    app.post("/db", async (req,res) => {
        try {
            const post = new data();
            post.username = req.params.username;
            post.user_email = req.params.user_email;
    
            await post.save()
            res.send(post); 
        } 
        catch (error) {
                console.log("Error Message is :",error);
        }
    })
       
    app.get(`/:a`, function(req,res){
            res.send(`Hello ` +req.params.a+ " " +moment().format("DD:MM:YYYY , hh:mm:ss , dddd") );
    });

    app.get("/think/:idea", function(req,res){
        res.send({})
    })




app.listen(8000);
console.log("Connected at port number 8000")