const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StrategiesOrAlternativesSchema = new Schema({   
    comments: String
});
module.exports= mongoose.model("StrategiesOrAlternatives", StrategiesOrAlternativesSchema);
