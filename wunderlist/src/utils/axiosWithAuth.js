import axios from "axios";

export const axiosWithAuth = () => {
  //gets token
  // const token = window.localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6Im1hcmNvQGdtYWlsLmNvbSIsImlhdCI6MTU4MzI1MjUxNSwiZXhwIjoxNTgzMjk1NzE1fQ.L4_K9Pj0sPpBSbAq0JhifqQbSzoeNLmiLJLocqyRRV8";
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      authorization: token
    },
    baseURL: "https://wunderlistclone.herokuapp.com"
  });
};
