const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact_no: String,
  password: String,
});
const Client = new mongoose.model("Clients", clientSchema);
module.exports = Client;
