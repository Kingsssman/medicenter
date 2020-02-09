import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: (jwtToken: string, id: string) => {},
  logout: () => {},
  isAuthenticated: false
});
