import React from "react";
import { LoginButton } from "../login/Login";

function Layout(props: any) {
  return (
    <main className="App">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <span className="fs-4">Simple Crud</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"></ul>

          <div className="col-md-3 text-end">
            <LoginButton />
          </div>
        </header>
      </div>
      <div className="container">
        <div className="d-flex align-items-center py-4">{props.children}</div>
      </div>
    </main>
  );
}

export default Layout;
