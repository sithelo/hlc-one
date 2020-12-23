const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorConsultationSchema = new Schema({  
    physicianConsultingName: String,
    physicianSpecialty: String,
    additionalInfo: String,
    physicianConsultingContactPref: String
});

const DoctorConsultation = mongoose.model("DoctorConsultation", DoctorConsultationSchema);
module.exports= { DoctorConsultation, DoctorConsultationSchema };
