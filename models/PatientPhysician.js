const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientPhysicianSchema = new Schema({ 
    physicianAttending: String,
    physicianSpecialty: String,
    physicianAdditional: String,
    physicianAdditionalSpecialty: String
});

module.exports= mongoose.model("PatientPhysician", PatientPhysicianSchema);
