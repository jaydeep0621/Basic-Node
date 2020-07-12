const mongoose = require("mongoose")

mongoose.Promise = global.Promise;


mongoose.connect("mongodb://localhost/8000" ,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

mongoose.connection
.on("err", () =>{
    console,log("Error Message is :", err)
})
.once("once", () => {
    console.log("Successfull Connected")
});