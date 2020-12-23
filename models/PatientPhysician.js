const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientPhysicianSchema = new Schema({ 
    physicianAttending: String,
    physicianSpecialty: String,
    physicianAdditional: String,
    physicianAdditionalSpecialty: String
});

const PatientPhysician = mongoose.model("PatientPhysician", PatientPhysicianSchema);
module.exports  = { PatientPhysician, PatientPhysicianSchema };
