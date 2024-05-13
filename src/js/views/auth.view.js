export default class AuthView {
    constructor() {
      this.registerForm = document.querySelector(".register-form");
    }
  
    bindRegisterSubmit = (handler) => {
      const username = document.getElementById("username");
      const email = document.getElementById("email");
      console.log(this.registerForm);
      this.registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        handler(email.value);
      });
    };  
  }
  