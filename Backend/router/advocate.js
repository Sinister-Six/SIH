const express=require('express')
const router=express.Router();
const Advocate=require('../model/advocate')

//api for register 
router.post("/advocate/register", async (req, res) => {
    const user = req.body;
    console.log(user);
    if (!user.name || !user.email || !user.address || !user.license_no || !user.court || !user.contact_no || !user.experience || !user.qualifications || !user.services_provided || !user.password) {
        return res.status(422).json({ Error: "Please provide all details" })
    }
    // const dbuser = await Advocate.findOne({ email: user.email });
    // console.log(dbuser)
    try {
        // if(dbuser.name==user.email){
        //     return res.status(422).json({Error :"Email already exist... Please login"})
        // }
        const x = new Advocate(user)
        await x.save();
        return res.status(200).json({ message: "Registration Successful" })
        // const res=await Advocate.collection.insertOne(x);
        console.log("registeration done")
    } catch (err) {
        console.log(err)
    }
    res.send("hello")
})

// advocate login api
router.post("/advocate/login", async (req, res) => {
    const user = req.body;
    console.log(user);
    if (!user.name || !user.email || !user.password) {
        return res.status(422).json({ Error: "Please provide all details" })
    }
    const dbuser = await Advocate.findOne({ email: user.email });
    console.log(dbuser.email)
    try {
        if (!dbuser) {
            res.status(404).json({ Error: "Email not exist" })
        }
        else if(dbuser.password!=user.password){
            res.status(404).json({ Error: "Wrong Password"})
        }
        else{
            res.status(200).json({message:"Login Successful"})
        }
    }
    catch (err) {
        console.log(err)
    }
    res.send("hello")
})

module.exports=router;