import { API } from "../constants/config";
import ApiService from "./apiService";
export default class UserService {
  constructor() {
    this.apiService = new ApiService(API.URL_API, API.END_POINT_USER);
  }

  getAllUser = async () => {
    return await this.apiService.get();
  };

  addUser = async (user) => {
    await this.apiService.post(user);
  };
}
