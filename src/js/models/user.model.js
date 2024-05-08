import UserEntity from "./entitys/user.entity";
export default class UserModel {
  setUser = (user) => {
    this.user = user.map((user) => new UserEntity(user));
  };

  getUser = () => {
    return this.user;
  };
}
