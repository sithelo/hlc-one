const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OutcomeOrFollowupSchema = new Schema({  
    localEldersContacted: Boolean, 
    comments: String
});

const OutcomeOrFollowup =  mongoose.model("OutcomeOrFollowup", OutcomeOrFollowupSchema);
module.exports  = { OutcomeOrFollowup, OutcomeOrFollowupSchema };
