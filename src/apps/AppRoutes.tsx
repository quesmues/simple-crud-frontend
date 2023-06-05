import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App, ProtectedApp } from "./App";
import { Login } from "./login/Login";
import Administrativo from "./administrativo/Administrativo";
import { Usuarios } from "./administrativo/usuario/Usuario";
import { Token } from "../interfaces/Login";

function AppRoutes() {
  const [token, setToken] = useState<Token>();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App token={token} />} />
        <Route
          path="/administrativo"
          element={
            <ProtectedApp token={token}>
              <Administrativo token={token} setToken={setToken} />
            </ProtectedApp>
          }
        />
        <Route
          path="/usuarios"
          element={
            <ProtectedApp token={token}>
              <Administrativo token={token} setToken={setToken}>
                <Usuarios token={token} />
              </Administrativo>
            </ProtectedApp>
          }
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
