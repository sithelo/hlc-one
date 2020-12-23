const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalArticlesSchema = new Schema({  
    physicianCopertiveAfter: Boolean, 
    comments: String
});

const MedicalArticles = mongoose.model("MedicalArticles", MedicalArticlesSchema);
module.exports= { MedicalArticles, MedicalArticlesSchema };
