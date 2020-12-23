import Patient from "@/models/Patient";
import "@/utils/dbConnect";

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case "GET":
			try {
				const patients = await Patient.find({}).sort({
					createdAt: "desc",
				});

				return res.status(200).json({
					success: true,
					data: patients,
				});
			} catch (error) {
				console.log(patients);
				return res.status(400).json({
					success: false,
				});
			}
		case "POST":
			try {
				const patient = await Patient.create(req.body);
				return res.status(201).json({
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
					runValidators: true
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
		default:
			res.setHeaders("Allow", ["GET", "POST", "PUT"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};