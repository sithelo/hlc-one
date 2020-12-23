const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalCaseSchema = new Schema({ 
    comments: String
});

module.exports= mongoose.model("MedicalCase", MedicalCaseSchema);
