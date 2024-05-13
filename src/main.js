import UserController from "./js/controllers/user.controller";
import UserModel from "./js/models/user.model";
import UserView from "./js/views/user.view";
import UserService from "./js/services/user.service";
import AuthController from "./js/controllers/auth.controller";
import AuthModel from "./js/models/auth.model";
import AuthService from "./js/services/auth.service";
import AuthView from "./js/views/auth.view";

// const userController = new UserController(
//   new UserModel(),
//   new UserView(),
//   new UserService()
// );

const authController = new AuthController(
  new AuthModel(),
  new AuthView(),
  new AuthService()
);


const init = { userController, authController };

