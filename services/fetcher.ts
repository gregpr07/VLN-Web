export const BASEURL = "http://127.0.0.1:8000/";
// export const BASEURL = "https://backend.videolectures.net/";
export const API = BASEURL + "api/";

// const getRequestOptions = (token: string = "", body) => {
//   const myHeaders = new Headers();
//   if (token) {
//     myHeaders.append("Authorization", `Token ${token}`);
//   }
//   return {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };
// };

// export const fetcher = (url: string, token: string) =>
//   //@ts-ignore
//   fetch(API + url, getRequestOptions(token)).then((r) => r.json());

// export const noHeadFetcher = (url: string) =>
//   fetch(API + url).then((r) => r.json());
