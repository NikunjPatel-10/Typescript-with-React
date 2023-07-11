import axios from "axios";

export class UserService {
  public static URL: string = "https://jsonplaceholder.typicode.com";

  public static getAllUser() {
    let UserURL = `${this.URL}/users`;
    return axios.get(UserURL);
  }
}
