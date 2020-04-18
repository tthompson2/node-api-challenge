const express = require("express");
const project = require("../helpers/projectModel.js")

const router = express.Router();

router.get("/:id", (req, res) => {

    const newID = req.params.id;

    project.get(newID)
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

    project.insert(req.body)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error adding the project"
            })
        })

})

router.put(":/id", (req, res) => {

    project.update(req.params.id, req.params.body)
        .then((user) => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    message: "The user cannot be found",
                })
            }

        })
})

router.delete(":/id", (req, res) => {

    project.remove(req.params.id)
        .then((count) => {
            if (count > 0) {
                res.status(200).json({
                    message: "This user has been deleted",
                })
            } else {
                res.status(404).json({
                    message: "The user cannot be found",
                })
            }

        })
})

router.get(":/id/actions", (req, res) => {

    project.getProjectActions(req.params.id)
        .then(user => {

        })
        .catch(error => {
            console.log(error);
        })

})

// function validateUserRequestBody() {
// 	if (!req.body.name || !req.body.email) {
// 		return res.status(400).json({
// 			message: "Missing user name or email",
// 		})
// 	}
// }

module.exports = router;