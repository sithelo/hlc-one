import Patient from "@/models/Patient";
import "@/utils/dbConnect";

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const patient = await Patient.findById(id);

        return res.status(200).json({
          success: true,
          data: patient,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }

    case "PUT":
      try {
        const patient = await Patient.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        return res.status(201).json({
          success: true,
          data: patient,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }
    case "DELETE":
      try {
        const patient = await Patient.deleteOne({ _id: id });
        return res.status(200).json({
          success: true,
          data: {},
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }
    default:
      res.setHeaders("Allow", ["GET", "DELETE", "PUT"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
};
