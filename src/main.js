import UserController from "./js/controllers/user.controller";
import UserModel from "./js/models/user.model";
import UserView from "./js/views/user.view";
import UserService from "./js/services/user.service";

const userController = new UserController(
  new UserModel(),
  new UserView(),
  new UserService()
);

const init = { userController };
