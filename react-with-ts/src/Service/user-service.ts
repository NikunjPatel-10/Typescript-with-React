import axios from "axios";

export class UserService {
  public static URL: string = "https://jsonplaceholder.typicode.com";

  public static getAllUser() {
    let UserURL = `${this.URL}/users`;
    return axios.get(UserURL);
  }
}

const API_KEY = "0b2aee674c8f4dd1af3d2819f3d83287";

export const getAllData = async () => {
  try {
    const response = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json`
    );

    console.log(response);
    // Here, you have access to news data from multiple countries under response.data.articles
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
