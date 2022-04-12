import { createContext } from "react";
import AuthStore from "./auth";
import UserStore from "./user";
import ImageStore from "./image";

const context = createContext({
  AuthStore,
  UserStore,
  ImageStore,
});
// window.context = {
//   AuthStore,
//   UserStore,
//   ImageStore,
// };
export default context;
