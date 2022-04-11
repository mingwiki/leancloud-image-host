import { makeAutoObservable } from "mobx";
// import { makeObservable, observable, computed, action } from "mobx";

class AuthStore {
  isLogin = false;
  isLoding = false;
  values = {
    username: "",
    password: "",
  };
  constructor() {
    // makeObservable(this, {
    //   isLogin: observable,
    //   isLoding: observable,
    //   values: observable,
    //   username: computed,
    //   password: computed,
    //   login: action,
    //   register: action,
    //   logout: action,
    // });
    makeAutoObservable(this);
  }
  get username() {
    return this.values.username;
  }
  set username(username) {
    this.values.username = username;
  }
  get password() {
    return this.values.password;
  }
  set password(password) {
    this.values.password = password;
  }
  login() {
    console.log("登录中。。。");
    this.isLoding = true;
    setTimeout(() => {
      console.log("登录成功");
      this.isLogin = true;
      this.isLoding = false;
    }, 2000);
  }
  register() {
    console.log("注册中。。。");
    this.isLoding = true;
    setTimeout(() => {
      console.log("注册成功");
      this.isLogin = true;
      this.isLoding = false;
    }, 2000);
  }
  logout() {
    console.log("退出中。。。");
  }
}

export default AuthStore;
