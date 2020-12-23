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

const TransferRequired = mongoose.model("TransferRequired", TransferRequiredSchema);
module.exports  = { TransferRequired, TransferRequiredSchema };