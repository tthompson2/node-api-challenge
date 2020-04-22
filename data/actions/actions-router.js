const express = require("express");
const actions = require("../helpers/actionModel")

const router = express.Router();

router.get("/:id", validatePost(), (req, res) => {

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

router.get("/", (req, res) => {


  actions.get()
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

router.post("/", validatePost(), (req, res) => {

    console.log(req.body);

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

router.put("/:id", validateUserId(), (req, res) => {

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

router.delete("/:id", validateUserId(), (req, res) => {

    const newID = req.params.id;

    console.log(newID);

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

function validateUserId() {

    return (req, res, next) => {
      actions.get(req.params.id)
        .then((user) => {
          if (user) {
            req.user = user;
            next()
          } else {
            res.status(404).json({
              message: "User not found",
            })
          }
        })
        .catch((error) => {
          next(error)
        })
    }
  
  }
  
  function validatePost() {
    return (req, res, next) => {
      if (!req.body.notes || !req.body.project_id || !req.body.description) {
        return res.status(400).json({
          message: "the json body is incorrectly formatted, so it cannot be posted"
        })
      }
      next()
    }
  }

module.exports = router;