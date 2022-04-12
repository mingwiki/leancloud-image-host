import { makeAutoObservable } from "mobx";
import { Auth } from "../models";

class UserStore {
  currentUser = null;
  constructor() {
    makeAutoObservable(this);
  }
  getCurrentUser() {
    this.currentUser = Auth.getCurrentUser();
  }
  resetCurrentUser() {
    this.currentUser = null;
  }
}

export default new UserStore();
