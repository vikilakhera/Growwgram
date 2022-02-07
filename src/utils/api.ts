import axios from "axios";
import { CLIENT_ID } from "./constants";
import { configureLocalStorage } from "./localStorage/helpers";

export function getRandomFeeds(page = 1) {
  const url = `https://api.unsplash.com/photos/random/`
  const params = {
    count: 10,
    page,
    client_id: CLIENT_ID
  }
  const cachingParams = {
    key: `Feed Data-${page}`,
    time: 60 * 5 * 1000
  }

  if(page < 3){
    return configureLocalStorage(url, cachingParams, params)
  }

  return axios.get(url, { params })
}

export function fetchUsersData(username: string) {
  const url = `https://api.unsplash.com/users/${username}`
  const params = {
    client_id: CLIENT_ID
  }
  const cachingParams = {
    key: username,
    time: 60 * 5 * 1000
  }

  return configureLocalStorage(url, cachingParams, params)
}

export function fetchUserPhtots(username: string, page = 1) {
  const url = `https://api.unsplash.com/users/${username}/photos`
  const params = {
    client_id: CLIENT_ID,
    page
  }
  const cachingParams = {
    key: username + page,
    time: 60 * 5 * 1000
  }

  if(page < 3){
    return configureLocalStorage(url, cachingParams, params)
  }

  return axios.get(url, { params })
}
