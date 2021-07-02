export const BASE_URL = "http://145.14.12.120/";
export const API = BASE_URL + "api/";

const getRequestOptions = (token: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);
  return {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
};

export const fetcher = (url: string, token: string) =>
  fetch(API + url, getRequestOptions(token)).then((r) => r.json());

export const noHeadFetcher = (url: string) =>
  fetch(API + url).then((r) => r.json());