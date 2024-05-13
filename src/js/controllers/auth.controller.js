export default class AuthController {
  constructor(authModel, authView, authService) {
    this.authModel = authModel;
    this.authView = authView;
    this.authService = authService;
    this.authView.bindRegisterSubmit(this.handleOtpSubmit);
  }

  handleOtpSubmit = async (email) => {
    await this.authService.sendOtp().then((res) => {
        const message = res;
        console.log(message);
    });
  };
}
