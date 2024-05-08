export default class UserEntity {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.password = data.password;
    this.fullName = data.fullName;
    this.email = data.email;
    this.phoneNumber = data.phoneNumber;
    this.role = data.role;
    this.habbit = data.habbit;
    this.address = data.address;
  }
}
