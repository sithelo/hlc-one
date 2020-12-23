const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientPhysicianTreatmentSchema = new Schema({ 
    medicalStaffHlc: Boolean,
    potentialLegalAction: Boolean,
    comments: String
});

module.exports= mongoose.model("PatientPhysicianTreatment", PatientPhysicianTreatmentSchema);
