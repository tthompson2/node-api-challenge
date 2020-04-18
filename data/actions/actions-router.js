const express = require("express");
const actions = require("../helpers/actionModel")

const router = express.Router();

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

    actions.insert(req.body)
        .then((user) => {
            res.status(201).json(user)
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "Error adding the action"
            })
        })

})

router.put(":/id", (req, res) => {

    actions.update(req.params.id, req.body)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error updating the action",
            })
        })

})

router.delete(":/id", (req, res) => {

    const newID = req.params.id;

    actions.remove(newID)
        .then(count => {
            if (count > 0) {
                res.status(200).json({
                    message: "This user has been nuked",
                })
            } else {
                res.status.apply(404).json({
                    message: "This user could not be found"
                })
            }
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