const mongoose = require('mongoose')

const advocateSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    license_no: String,
    court: String,
    contact_no: String,
    experience: Number,
    qualifications: String,
    password:String,
    services_provided: Array,
})
const Advocate = new mongoose.model("Advocate", advocateSchema)
module.exports = Advocate;