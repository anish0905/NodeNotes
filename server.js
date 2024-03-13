const express = require("express");

const app = express();

const dotenv = require("dotenv").config();

const port = process.env.PORT||5000;



app.use("/api/contacts" , require("./routes/contactRoutes"))  //middleware

app.listen(port,()=>{
    console.log(`Server running port ${port}`);
})