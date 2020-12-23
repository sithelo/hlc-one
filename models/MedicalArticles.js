const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalArticlesSchema = new Schema({  
    physicianCopertiveAfter: Boolean, 
    comments: String
});

module.exports= mongoose.model("MedicalArticles", MedicalArticlesSchema);
