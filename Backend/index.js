const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Advocate = require("./model/advocate")
const app = express();

//database connection
mongoose.connect("mongodb+srv://muraripandey1886:U8nh.bJKFs9bJcp@cluster0.xsvqgx2.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "SIH_Backend",
})
    .then(() => console.log("DataBase Connected"))
    .catch((e) => console.log(e))

app.post("/advocate", async (req, res) => {
    const {name,email,address,license_no,court,contact_no,experience,qualifications,password,cpassword,services_provided} = req.body;
    console.log(name);
    res.send("hello")
    // if(!user.name || !user.email || !user.address || !user.license_no ||!user.court ||!user.contact_no ||!user.experience ||!user.qualifications || !user.services_provided || !user.password || !user.cpassword){
    //     return res.status(422).json({Error:"Please provide of details"})
    // }
    // try{
    //     if(user.password!=user.cpassword){
    //         return res.status(422).json({Error:"Password and Confirm Password are not matching"})
    //     }
    //     else{
    //         await Advocate.create({user})
    //         console.log("registeration done")
    //     }
    // }catch(err){
    //     console.log(err)
    // }

})


app.get("/", (req, res) => {
    res.send("hello")
})
app.listen(5000, () => {
    console.log("server is running")
});