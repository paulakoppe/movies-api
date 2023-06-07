const { Router } = require("express");

const UserController = require("../controllers/UsersController")

const userRoutes = Router()


const usersController = new UserController()

userRoutes.post("/", usersController.create)
userRoutes.put("/:id", usersController.update);



module.exports = userRoutes;