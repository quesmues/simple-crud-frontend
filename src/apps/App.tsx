import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navigate } from "react-router-dom";
import { PropsToken, ChildrenTokenProps } from "../interfaces/Login";

const Administrativo = React.lazy(
  () => import("./administrativo/Administrativo")
);

export function App({ token }: PropsToken) {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Navigate to="/administrativo" />;
}

export function ProtectedApp({ token, children }: ChildrenTokenProps) {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}
