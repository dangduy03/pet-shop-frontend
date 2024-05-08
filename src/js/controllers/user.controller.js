export default class UserController {
  constructor(userModel, userView, userService) {
    this.userModel = userModel;
    this.userView = userView;
    this.userService = userService;
    this.userView.bindLoginSubmit(this.handleLoginSubmit);
  }

  handleLoginSubmit = async (email, password) => {
    console.log(email, password);
    await this.userService.getAllUser().then((res) => {
      this.userModel.setUser(res);
      const user = this.userModel.getUser();
      console.log(user);
      // tu check dieu kien login

      if (user) {
        alert("Login success");
      } else {
        alert("Login failed");
      }
    });
  };
}
