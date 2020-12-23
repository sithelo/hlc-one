const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotifierSchema = new Schema({ 
    dateTime: Date,
    caller: String,
    callerContact: String,
    hlcRequested: Boolean,
    relationship: String
});
const Notifier = mongoose.model("Notifier", NotifierSchema);

module.exports = { Notifier, NotifierSchema };