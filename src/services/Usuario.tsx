import { Token } from "../interfaces/Login";
import { Usuario } from "../interfaces/Usuario";

export async function getUsuarios(
  token: Token | undefined,
  limit: number = 10,
  offset: number = 0
) {
  if (!token) {
    return [];
  }

  return fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/v1/usuario?offset=${offset}&limit=${limit}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((data) => data.json())
    .catch((error) => {
      console.log("Houve um erro: " + error.message);
    });
}

export async function getUsuario(id: string, token: Token | undefined) {
  if (!token) {
    return [];
  }

  return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/usuario/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  })
    .then((data) => data.json())
    .catch((error) => {
      console.log("Houve um erro: " + error.message);
    });
}

export async function deleteUsuario(id: string, token: Token | undefined) {
  if (!token) {
    return [];
  }

  return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/usuario/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  }).catch((error) => {
    console.log("Houve um erro: " + error.message);
  });
}

export async function createUsuario(data: Usuario, token: Token | undefined) {
  if (!token) {
    return [];
  }

  return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/usuario`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    }),
  })
    .then((data) => data.json())
    .catch((error) => {
      console.log("Houve um erro: " + error.message);
    });
}

export async function patchUsuario(data: Usuario, token: Token | undefined) {
  if (!token) {
    return [];
  }

  return fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/v1/usuario/${data.id}`,
    {
      method: "PATCH",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    }
  )
    .then((data) => data.json())
    .catch((error) => {
      console.log("Houve um erro: " + error.message);
    });
}
