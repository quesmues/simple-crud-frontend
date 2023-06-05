import { useNavigate } from "react-router-dom";
import "./Administrativo.css";
import React, { PropsWithChildren } from "react";
import { AdministrativoProps } from "../../interfaces/App";

function Administrativo({ token, children, setToken }: AdministrativoProps) {
  const navigate = useNavigate();

  const usuariosNavigate = async () => {
    setToken(token);
    navigate("/usuarios");
  };

  const administrativoNavigate = async () => {
    setToken(token);
    navigate("/administrativo");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white min-vh-100">
              <a
                href="#"
                onClick={administrativoNavigate}
                className="d-flex mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-4">Administrativo</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a
                    href="#"
                    onClick={administrativoNavigate}
                    className="nav-link align-middle px-0"
                  >
                    <i className="fs-4 bi-house" />{" "}
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={usuariosNavigate}
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-people" />{" "}
                    <span className="ms-1 d-none d-sm-inline">Usuarios</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="/logout" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-door-closed" />{" "}
                    <span className="ms-1 d-none d-sm-inline">Sair</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-5 pe-4">{children ? children : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default Administrativo;
