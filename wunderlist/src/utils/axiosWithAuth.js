import axios from "axios";

export const axiosWithAuth = () => {
  //gets token
  const token = window.localStorage.getItem("token");
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6Im1hcmNvQGdtYWlsLmNvbSIsImlhdCI6MTU4MzI5ODY1NCwiZXhwIjoxNTgzMzQxODU0fQ.iEwJUeQXC0blAwAVeYpd8e5kq5oUjNLS89tFgQJLAA8";
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      authorization: token
    },
    baseURL: "https://wunderlistclone.herokuapp.com"
  });
};
