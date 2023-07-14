const router = require("express").Router();


router.get('/getAllUsers',async(req,res)=>{
	try {
		const response = await User.find({})
		return res.status(200).send(response)
	} catch (error) {
		return res.status(500).send(error)
	}
})


module.exports = router;