import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("inicia app", () => {
  render(<App token="teste" />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
