import dbConnect from "../../utils/dbConnect";
import {MedicalEmergency} from "../../models/MedicalEmergency";
import Patient from "../../models/Patient";


dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const medicalemergencies = await MedicalEmergency.find({});
        res.status(200).json({ success: true, data: medicalemergencies });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log(Patient);
        const note = await Patient.create(req.body);

        res.status(201).json({ success: true, data: note });
      } catch (error) {
          console.log(error)
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
    case "PUT":
      try {
        console.log(req.body);
        const medicalemergencies = await MedicalEmergency.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!medicalemergencies) {
          conso;
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: medicalemergencies });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
