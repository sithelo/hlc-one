const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhysicianTreatmentSchema = new Schema({ 
    medicalStaffHlc: Boolean,
    potentialLegalAction: Boolean,
    comments: String
});

const PhysicianTreatment = mongoose.model("PhysicianTreatment", PhysicianTreatmentSchema);
module.exports  = { PhysicianTreatment, PhysicianTreatmentSchema };