const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Session = new Schema({
  token: { type: String },
  user: { type: String },
  expire: { type: Date }
});

module.exports = mongoose.model('Session', Session);