import { API } from "../constants/config";
import ApiService from "./apiService";
export default class AuthService {
  constructor() {
    this.apiService = new ApiService(API.URL_API, API.END_POINT_AUTH);
  }

  sendOtp = async (email) => {
    try {
      console.log("abc");
      const res = await fetch(`${API.URL_API}/${END_POINT_AUTH}/send-otp`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
      if (res.ok) {
        return res.json();
      }
    } catch (error) {
      throw new Error(`Post data fail ${error.message}`);
    }
  };
}
