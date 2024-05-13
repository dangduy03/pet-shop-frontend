import AuthEntity from "./entitys/auth.entity";
export default class AuthModel {
  setAuth = (auth) => {
    this.auth = auth.map((auth) => new authEntity(auth));
  };

  getAuth = () => {
    return this.auth;
  };
}
