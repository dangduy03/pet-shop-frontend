export default class UserView {
  constructor() {
    this.formLogin = document.getElementById("form-login");
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
  
}
