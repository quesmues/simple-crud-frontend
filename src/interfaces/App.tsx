import { Token } from "./Login";

export interface AdministrativoProps {
  token?: Token;
  children?: React.JSX.Element;
  setToken: Function;
}
