const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NeonateSchema = new Schema({   
    birthWeight: Number,
    gestationalAge: Number,
    dateOfBirth: Date,
    motherBaptized: Boolean,
    comments: String,
    apgarScore: { type: mongoose.Schema.Types.ObjectId, ref: 'APGAR_Score' },
});
module.exports  = mongoose.model("Neonate", NeonateSchema);
