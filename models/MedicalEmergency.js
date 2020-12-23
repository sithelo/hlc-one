const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalEmergencySchema = new Schema({
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
    congregation: Number,
    namesOfElderContacted: [String],
    contactNumbersOfElders: [Number],
    minorOrNeonate: Boolean,
    minorOrNeoNateFamily: { type: mongoose.Schema.Types.ObjectId, ref: 'MinorOrNeonate' },
    medicalCaseDetails: [{ type:mongoose.Schema.Types.ObjectId, ref: 'MedicalCase' }],
    labValues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LabValues' }],
    physicianDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Physician' }],
    physicianTreatmentPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PhysicianTreatmentPlan' }],
    strategiesOrAlternatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StrategiesOrAlternatives' }],
    medicalArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalArticles' }],
    dr2drConsultation: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DoctorToDoctorConsultation' }],
    transferRequired: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TransferRequired' }], 
    outcomeOrFollowup: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OutcomeOrFollowup' }],   
});
const UserAssignedSchema = new Schema({
    FirstName: String,
    LastName: String,
});
const MinorOrNeonateSchema = new Schema({   
    fatherName: String,
    motherName: String,
    fatherBaptized: Boolean,
    motherBaptized: Boolean,
    comments: String,
    neoNate: { type: mongoose.Schema.Types.ObjectId, ref: 'Neonate' },
});
const NeonateSchema = new Schema({   
    birthWeight: Number,
    gestationalAge: Number,
    dateOfBirth: Date,
    motherBaptized: Boolean,
    comments: String,
    apgarScore: { type: mongoose.Schema.Types.ObjectId, ref: 'APGAR_Score' },
});
const APGAR_ScoreSchema = new Schema({   
    birth: Number,
    fiveMinutes: Number
});
const MedicalCaseSchema = new Schema({ 
    comments: String
});
const LabValuesSchema = new Schema({ 
    dateTimeTaken: Date,
    hemoglobin: Number,
    hematocrit: Number,
    platelet: Number,
    other: Number
});
const PhysicianSchema = new Schema({ 
    physicianAttending: String,
    physicianSpecialty: String,
    physicianAdditional: String,
    physicianAdditionalSpecialty: String
});
const PhysicianTreatmentPlanSchema = new Schema({ 
    medicalStaffHlc: Boolean,
    potentialLegalAction: Boolean,
    comments: String
});
const StrategiesOrAlternativesSchema = new Schema({   
    comments: String
});
const MedicalArticlesSchema = new Schema({  
    physicianCopertiveAfter: Boolean, 
    comments: String
});
const DoctorToDoctorConsultationSchema = new Schema({  
    physicianConsultingName: String,
    physicianSpecialty: String,
    additionalInfo: String,
    physicianConsultingContactPref: String
});

const TransferRequiredSchema = new Schema({  
    transferArrangementConfirmed: Boolean,
    hidContactedforOutsideHLC: String,
    hospitalName: String,
    attendingPhysician: String,
    contactNumber: String,
    additionalInfo: String
});
const OutcomeOrFollowupSchema = new Schema({  
    localEldersContacted: Boolean, 
    comments: String
});

const MedicalEmergency = mongoose.models.MedicalEmergency || mongoose.model("MedicalEmergency", MedicalEmergencySchema);
const UserAssigned = mongoose.models.UserAssignedSchema || mongoose.model("UserAssignedSchema", UserAssignedSchema);
const MinorOrNeonate = mongoose.models.MinorOrNeonate || mongoose.model("MinorOrNeonate", MinorOrNeonateSchema);
const Neonate = mongoose.models.Neonate || mongoose.model("Neonate", NeonateSchema);
const APGAR_Score = mongoose.models.APGAR_Score || mongoose.model("APGAR_Score", APGAR_ScoreSchema);
const MedicalCase = mongoose.models.TransferRequired || mongoose.model("TransferRequired", MedicalCaseSchema);
const LabValues = mongoose.models.LabValues || mongoose.model("LabValues", LabValuesSchema);
const Physician = mongoose.models.Physician || mongoose.model("Physician", PhysicianSchema);
const PhysicianTreatmentPlan = mongoose.models.PhysicianTreatmentPlan || mongoose.model("PhysicianTreatmentPlan", PhysicianTreatmentPlanSchema);
const StrategiesOrAlternatives = mongoose.models.StrategiesOrAlternatives || mongoose.model("StrategiesOrAlternatives", StrategiesOrAlternativesSchema);
const MedicalArticles = mongoose.models.MedicalArticles || mongoose.models.MedicalEmergency || mongoose.model("MedicalArticles", MedicalArticlesSchema);
const DoctorToDoctorConsultation = mongoose.models.DoctorToDoctorConsultation || mongoose.model("DoctorToDoctorConsultation", DoctorToDoctorConsultationSchema);
const TransferRequired = mongoose.models.TransferRequired || mongoose.model("TransferRequired", TransferRequiredSchema);
const OutcomeOrFollowup = mongoose.models.OutcomeOrFollowup || mongoose.model("OutcomeOrFollowup", OutcomeOrFollowupSchema);

module.exports = { MedicalEmergency, UserAssigned, MinorOrNeonate, Neonate, APGAR_Score, MedicalCase, LabValues, Physician, PhysicianTreatmentPlan, StrategiesOrAlternatives,  MedicalArticles,  DoctorToDoctorConsultation,  TransferRequired,  OutcomeOrFollowup };