import { createContext } from "react";
import AuthStore from "./auth";
import UserStore from "./user";
import ImageStore from "./image";
import HistoryStore from "./history";

const context = createContext({
  AuthStore,
  UserStore,
  ImageStore,
  HistoryStore,
});
// window.context = {
//   AuthStore,
//   UserStore,
//   ImageStore,
//   HistoryStore,
// };
export default context;
