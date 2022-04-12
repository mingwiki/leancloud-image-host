import AV, { Query, User } from 'leancloud-storage';
AV.init({
  appId: "Co2HYYsX3YsrSM8hLn35yMVq-gzGzoHsz",
  appKey: "vpslFNPbTpcTFj4XHIGHP9eH",
  serverURL: "https://api.naizi.fun"
})
// console.log("AV init...")
const Auth = {
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then((user) => resolve(user), (error) => reject(error))
    })
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then((user) => resolve(user), (error) => reject(error));
    })
  },
  logout() {
    User.logOut()
  },
  getCurrentUser() {
    return User.current()
  }
}

export { Auth }