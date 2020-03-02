import axios from "axios";

export const axiosWithAuth = () => {
  //gets token
  // const token = window.localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6Im1hcmNvQGdtYWlsLmNvbSIsImlhdCI6MTU4MzE4MTcyMSwiZXhwIjoxNTgzMjI0OTIxfQ.aQxaFI9EU57bhGIEEQnAVDIp2jhRu5F9fuX1GwB3zzU";
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      authorization: token
    },
    baseURL: "https://wunderlistclone.herokuapp.com"
  });
};
