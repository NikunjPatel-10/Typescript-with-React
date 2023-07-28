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
  // try {
  //   const response = await axios.get(
  //     `https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json`
  //   );

  //   console.log(response);
  //   // Here, you have access to news data from multiple countries under response.data.articles
  //   return response.data.articles;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   return null;
  // }

  const url = "https://tech-news3.p.rapidapi.com/venturebeat";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3ea5dec37fmsh3b16d26a346fed5p1d2bb9jsn9efa3e78f45e",
      "X-RapidAPI-Host": "tech-news3.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("its from result block", result);
  } catch (error) {
    console.error("its in error block", error);
  }
};
