import { Credentials } from "../interfaces/Login";

export async function loginUser(credentials: Credentials) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/login`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ ...credentials }),
  })
    .then((data) => data.json())
    .catch((error) => {
      console.log("Houve um erro: " + error.message);
    });
}

export {};
