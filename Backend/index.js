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

app.use(express.json());

app.use(require('./router/advocate'))
app.use(require('./router/client'))

app.get("/", (req, res) => {
    res.send("hello")
})
app.listen(5000, () => {
    console.log("server is running")
});