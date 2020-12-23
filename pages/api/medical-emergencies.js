import dbConnect from '../../utils/dbConnect';
import MedicalEmergency from '../../models/MedicalEmergency'

dbConnect();

export default async (req, res) => {
   const { method } = req;
   switch(method){
       case 'GET':
           try {
               const medicalemergencies = await MedicalEmergency.find({})
               res.status(200).json({success: true, data: medicalemergencies})
           }catch (error){
               res.status(400).json({success: false})
           }
           break;
   }
}