const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabValuesSchema = new Schema({ 
    dateTimeTaken: Date,
    hemoglobin: Number,
    hematocrit: Number,
    platelet: Number,
    other: Number
});

module.exports= mongoose.model("LabValues", LabValuesSchema);
