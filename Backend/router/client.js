const express = require("express");
const router = express.Router();
const Client = require("../model/client");

router.post("/client/register", async (req, res) => {
    const user = req.body;
    console.log(user)
    try {
        if (!user.name || !user.email || !user.contact_no || !user.password) {
            return res.status(422).json({ Error: "Please fill all the fields" })
        }
        const x = new Client(user);
        await x.save()
        return res.status(200).json({ message: "Registration Successful" })
    } catch (err) {
        console.log(err)
    }
})

router.post("/client/login", async (req, res) => {
    const user = req.body;
    console.log(user)
    try {
        if (!user.email || !user.password) {
            return res.status(422).json({ Error: "Please provide all details..." })
        }
        const dbuser=await Client.findOne({email : user.email});
        if(!dbuser){
            res.status(422).json({Error:"Client doesn't exist...."})
        }
        else if(dbuser.password!=user.password){
            res.status(422).json({Error:"Password doesn't match"});
        }
        else{
            res.status(200).json({message:"Login Successful"})
        }
    }
    catch (err) {
        console.log(err)
    }

})

module.exports = router