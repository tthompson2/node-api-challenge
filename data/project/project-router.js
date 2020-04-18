const express = require("express");
const actions = require("./data/helpers/projectModel.js")

const router = express.Router();

router.get("/", (req, res) => {


})

router.get("/:id", (req, res) => {

    const newID = req.params.id;

    actions.get(newID)
        .then((users => {
            res.status(200).json(users)
        }))
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error retrieving the users",
            })
        })

})


router.post("/", (req, res) => {

})

router.put(":/id", (req, res) => {

})

router.delete(":/id", (req, res) => {

})

router.get(":/id/posts", (req, res) => {

})

router.get(":/id/posts/postID", (req, res) => {

})

router.post(":/id/posts", (req, res) => {

})

function validateUserRequestBody() {
	if (!req.body.name || !req.body.email) {
		return res.status(400).json({
			message: "Missing user name or email",
		})
	}
}

module.exports = router;