export default class OtpView {
  constructor() {
    this.confirmButton = document.getElementById("confirm-button");
    this.resendButton = document.getElementById("resend-button");
  }

  bindLoginSubmit = (handler) => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    this.formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(email.value, password.value);
      handler(email.value, password.value);
    });
  };

  bindConfirmButton = (handler) => {
    const otpCode = document.getElementById('otp-code');
    handler(otpCode);
  }


  
}
