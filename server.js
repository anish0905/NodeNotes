const express = require("express");
<<<<<<< HEAD
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT||5000;

app.get("/api/contacts",(req,resp)=>{
    resp.json({message:"get all contact"})
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
=======
const app = express();

const dotenv = require("dotenv").config();

const port = process.env.PORT||5000;



app.use("/api/contacts" , require("./routes/contactRoutes"))  //middleware

app.listen(port,()=>{
    console.log(`Server running port ${port}`);
})
>>>>>>> 3e9e24a (create router)
