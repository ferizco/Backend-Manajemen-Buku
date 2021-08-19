const aksesuser = require("express").Router();
const UserModel = require("./model-user.js");

aksesuser.route("/").get((req, res) => {
  UserModel.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json(error.message));
});
aksesuser.route("/add").post((req, res) => {
  UserModel.create(req.body)
    .then((createdUser) => res.status(200).json(createdUser))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = aksesuser;
