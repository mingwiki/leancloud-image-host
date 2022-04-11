import { createContext } from "react";
import AuthStore from "./auth";

const context = createContext({
  AuthStore: new AuthStore(),
});

export default context;
