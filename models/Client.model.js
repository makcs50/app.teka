const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  wallet: { type: Number, default: 0 } 
});


module.exports = mongoose.model('Client', clientSchema);
