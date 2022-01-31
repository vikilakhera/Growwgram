import axios from "axios";
import { CLIENT_ID } from "./constants";

export function getRandomFeeds(page = 1) {
  const url = `https://api.unsplash.com/photos/random/`
  const params = {
    count: 10,
    page,
    client_id: CLIENT_ID
  }

  return axios.get(url, { params })
}
