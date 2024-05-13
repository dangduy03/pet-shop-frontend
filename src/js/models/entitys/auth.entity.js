export default class AuthEntity {
  constructor(data) {
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
    this.otp = data.otp;
  }
}
