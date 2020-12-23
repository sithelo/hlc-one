const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotifierSchema = require('./Notifier').NotifierSchema;
const MinorOrNeonateSchema = require('./MinorOrNeonate').MinorOrNeonateSchema;
const MedicalCaseSchema = require('./MedicalCase').MedicalCaseSchema;
const PatientPhysicianSchema = require('./PatientPhysician').PatientPhysicianSchema;
const PhysicianTreatmentSchema = require('./PatientPhysicianTreatment').PhysicianTreatmentSchema;
const StrategiesOrAlternativesSchema = require('./StrategiesOrAlternatives').StrategiesOrAlternativesSchema;
const MedicalArticlesSchema = require('./MedicalArticles').MedicalArticlesSchema;
const DoctorConsultationSchema = require('./DoctorToDoctorConsultation').DoctorConsultationSchema;
const TransferRequiredSchema = require('./TransferRequired').TransferRequiredSchema;
const OutcomeOrFollowupSchema = require('./OutcomeOrFollowup').OutcomeOrFollowupSchema;


const PatientSchema = new Schema({
    memberAssigned:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserAssigned' }],
    notifier: { type: mongoose.Schema.Types.ObjectId, ref: 'Notifier' },
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
    minorOrNeoNateFamily: MinorOrNeonateSchema,
    medicalCaseDetails: MedicalCaseSchema,
    labValues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LabValues' }],
    physicianDetails: PatientPhysicianSchema,
    physicianTreatmentPlan: PhysicianTreatmentSchema,
    strategiesOrAlternatives: StrategiesOrAlternativesSchema,
    medicalArticles: MedicalArticlesSchema,
    dr2drConsultation: DoctorConsultationSchema,
    transferRequired: TransferRequiredSchema, 
    outcomeOrFollowup: OutcomeOrFollowupSchema,   
    createdAt: { type: Date, default: Date.now },
});
// const PatientSchema = new Schema({
//     memberAssigned:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserAssigned' }],
//     notifier: { type: mongoose.Schema.Types.ObjectId, ref: 'Notification' },
//     patientFullName: String,
//     gender: String,
//     comments: String,
//     age: Number,
//     patientStanding: String,
//     hospitalName: String,
//     room: Number,
//     telephone: Number,
//     congregation: String,
//     namesOfElderContacted: [String],
//     contactNumbersOfElders: [Number],
//     minorOrNeonate: Boolean,
//     minorOrNeoNateFamily: { type: mongoose.Schema.Types.ObjectId, ref: 'MinorOrNeonate' },
//     medicalCaseDetails: { type:mongoose.Schema.Types.ObjectId, ref: 'MedicalCase' },
//     labValues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LabValues' }],
//     physicianDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'Physician' },
//     physicianTreatmentPlan: { type: mongoose.Schema.Types.ObjectId, ref: 'PhysicianTreatmentPlan' },
//     strategiesOrAlternatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StrategiesOrAlternatives' }],
//     medicalArticles: { type: mongoose.Schema.Types.ObjectId, ref: 'MedicalArticles' },
//     dr2drConsultation: { type: mongoose.Schema.Types.ObjectId, ref: 'DoctorToDoctorConsultation' },
//     transferRequired: { type: mongoose.Schema.Types.ObjectId, ref: 'TransferRequired' }, 
//     outcomeOrFollowup: { type: mongoose.Schema.Types.ObjectId, ref: 'OutcomeOrFollowup' },   
//     createdAt: { type: Date, default: Date.now },
// });

module.exports = mongoose.model("Patient", PatientSchema);