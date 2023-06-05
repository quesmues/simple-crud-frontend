export interface Credentials {
  username: string;
  password: string;
}

export interface PropsSetToken {
  setToken: Function;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}

export interface ChildrenTokenProps {
  token?: Token;
  children: React.JSX.Element;
}

export interface PropsToken {
  token?: Token;
}
