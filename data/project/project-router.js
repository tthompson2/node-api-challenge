const express = require("express");
const project = require("../helpers/projectModel.js")

const router = express.Router();

router.get("/:id", validateProjectId(), (req, res) => {

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

router.post("/", validateProject(), (req, res) => {

    console.log(req.body)

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

router.put("/:id",  validateProjectId(), (req, res) => {

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

router.delete("/:id",  validateProjectId(), (req, res) => {

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

router.get("/:id/actions/:projectId", validateProjectId(), (req, res) => {

    project.getProjectActions(req.params.projectId)
        .then(user => {
          if(user) {
              res.status(200).json(user)
          }
        })
        .catch(error => {
            console.log(error);
        })

})

function validateProjectId() {

    return (req, res, next) => {
      project.get(req.params.id)
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
  
  function validateProject() {
    return (req, res, next) => {
      if (!req.body) {
        return res.status(400).json({
          message: "unable to retrieve user information"
        })
      }
      next()
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