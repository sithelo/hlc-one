const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalCaseSchema = new Schema({ 
    comments: String
});

const MedicalCase = mongoose.model("MedicalCase", MedicalCaseSchema);
module.exports= { MedicalCase, MedicalCaseSchema };