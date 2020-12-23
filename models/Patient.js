const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    memberAssigned:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserAssigned' }],
    notifier: { type: mongoose.Schema.Types.ObjectId, ref: 'Notification' },
    patientFullName: String,
    gender: String,
    comments: String,
    age: Number,
    patientStanding: String,
    hospitalName: String,
    room: Number,
    telephone: Number,
    congregation: String,
    namesOfElderContacted: [String],
    contactNumbersOfElders: [Number],
    minorOrNeonate: Boolean,
    minorOrNeoNateFamily: { type: mongoose.Schema.Types.ObjectId, ref: 'MinorOrNeonate' },
    medicalCaseDetails: { type:mongoose.Schema.Types.ObjectId, ref: 'MedicalCase' },
    labValues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LabValues' }],
    physicianDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'Physician' },
    physicianTreatmentPlan: { type: mongoose.Schema.Types.ObjectId, ref: 'PhysicianTreatmentPlan' },
    strategiesOrAlternatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StrategiesOrAlternatives' }],
    medicalArticles: { type: mongoose.Schema.Types.ObjectId, ref: 'MedicalArticles' },
    dr2drConsultation: { type: mongoose.Schema.Types.ObjectId, ref: 'DoctorToDoctorConsultation' },
    transferRequired: { type: mongoose.Schema.Types.ObjectId, ref: 'TransferRequired' }, 
    outcomeOrFollowup: { type: mongoose.Schema.Types.ObjectId, ref: 'OutcomeOrFollowup' },   
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patient", PatientSchema);