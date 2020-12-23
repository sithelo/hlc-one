const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorToDoctorConsultationSchema = new Schema({  
    physicianConsultingName: String,
    physicianSpecialty: String,
    additionalInfo: String,
    physicianConsultingContactPref: String
});

module.exports= mongoose.model("DoctorToDoctorConsultation", DoctorToDoctorConsultationSchema);
