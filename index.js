require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose =  require('mongoose');
const body_parser = require('body-parser')
const auth = require("./auth.js");
const app = express();



app.use(body_parser.json());
app.use(require("cors")());


app.use("/api", require("./authentication.js"));
app.use("/api", require("./contact1.js"));


async function connectDB(){
    try{
            await mongoose.connect('mongodb+srv://kanishka:Aqpfk15rpTGS578W@cluster05.pgwmpx4.mongodb.net/ContactManager?retryWrites=true&w=majority&appName=Cluster05')
            const port = process.env.PORT || 8000
            console.log('DB Connection Established')
            app.listen(port,function(){
                console.log(`Listening on port ${port}`)
            })
        }
      
    catch(error){
       console.log(error)
       console.log("Can't Establish Connection")
    }
    }
    connectDB()