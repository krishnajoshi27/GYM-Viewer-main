const router = require("express").Router();
const { json } = require("body-parser");
const { Admin } = require("../models/Admin");



router.post("/signupad", async (req, res) => {
	try {
		let { name, email, password } = req.body;
		// const { error } = validateUser(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });
		console.log("1");
		let admin = await Admin.findOne({ email });
		console.log("2");
		if (admin)
			return res.status(409).send({ message: "Admin with given email already Exist!" });

		//const salt = await bcrypt.genSalt(Number(process.env.SALT));
		//const hashPassword = await bcrypt.hash(req.body.password, salt);
		console.log("3");
		//  await new Admin({ ...req.body }).save();
		let adminData = new Admin({
			name: name,
			email: email,
			password: password
		})
		let data = await adminData.save();

		console.log("4");
		res.status(201).send({ data: data, message: "Admin Signup successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/loginad", async (req, res) => {
	try {
		let { name, email, password } = req.body;
		let admin = await Admin.findOne({ email });

		let adminData = new Admin({
			name: name,
			email: email,
			password: password
		})
		let data = await adminData.save();

		res.status(201).send({ data: data, message: "Admin Signup successfully" });
} catch (error) {
	res.status(500).send({ message: "Internal Server Error" });
}
});
module.exports = router;