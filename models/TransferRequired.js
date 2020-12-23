const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransferRequiredSchema = new Schema({  
    transferArrangementConfirmed: Boolean,
    hidContactedforOutsideHLC: String,
    hospitalName: String,
    attendingPhysician: String,
    contactNumber: String,
    additionalInfo: String
});

module.exports= mongoose.model("TransferRequired", TransferRequiredSchema);
