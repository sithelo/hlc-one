const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MinorOrNeonateSchema = new Schema({   
    fatherName: String,
    motherName: String,
    fatherBaptized: Boolean,
    motherBaptized: Boolean,
    comments: String,
    isNeonate: Boolean,
    neoNate: { type: mongoose.Schema.Types.ObjectId, ref: 'Neonate' },
});
const MinorOrNeonate =  mongoose.model("MinorOrNeonate", MinorOrNeonateSchema);
module.exports  = { MinorOrNeonate, MinorOrNeonateSchema };
