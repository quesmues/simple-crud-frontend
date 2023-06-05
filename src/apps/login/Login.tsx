import React, { useState, FormEvent } from "react";

import "./Login.css";
import { loginUser } from "../../services/Login";
import PropTypes from "prop-types";
import Layout from "../core/Layout";
import { PropsSetToken } from "../../interfaces/Login";
import { useNavigate } from "react-router-dom";

export function Login({ setToken }: PropsSetToken) {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    setToken(response);
    navigate("/");
  };

  return (
    <Layout>
      <div className="container">
        <div className="form-signin w-50 m-auto">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal Login-form-title">Login</h1>

            <div className="form-floating">
              <input
                type="username"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="floatingInput">Usuário ou Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Senha</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Lembre me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export function LoginButton() {
  const navigate = () => {
    window.location.href = "/administrativo";
  };
  return (
    <button
      type="button"
      className="btn btn-outline-primary me-2"
      onClick={navigate}
    >
      Administrativo
    </button>
  );
}

export function LogoutButton() {
  const navigate = () => {
    window.location.href = "/";
  };
  return (
    <button
      type="button"
      className="btn btn-outline-primary me-2"
      onClick={navigate}
    >
      Logout
    </button>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
