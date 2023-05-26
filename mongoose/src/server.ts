// const express = require('express');
// const mongoose = require('mongoose');

import mongoose from "mongoose"; 
import app from "./app";

const port = 3000

// database connection
async function ConnectDatabase() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("server is connected");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
  
    }
    catch(error){
        console.log("errpr occure", error)
    }
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
ConnectDatabase();


