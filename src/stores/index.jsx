import { createContext } from "react";
import AuthStore from "./auth";
import UserStore from "./user";

const context = createContext({
  AuthStore,
  UserStore,
});
// window.context = {
//   AuthStore,
//   UserStore,
// };
export default context;
