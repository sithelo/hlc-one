const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StrategiesOrAlternativesSchema = new Schema({   
    comments: String
});

const StrategiesOrAlternatives = mongoose.model("StrategiesOrAlternatives", StrategiesOrAlternativesSchema);
module.exports  = { StrategiesOrAlternatives, StrategiesOrAlternativesSchema };
