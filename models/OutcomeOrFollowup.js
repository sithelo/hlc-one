const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OutcomeOrFollowupSchema = new Schema({  
    localEldersContacted: Boolean, 
    comments: String
});

module.exports= mongoose.model("OutcomeOrFollowup", OutcomeOrFollowupSchema);
