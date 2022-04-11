import AV, { Query, User } from 'leancloud-storage';
AV.init({
  appId: "Co2HYYsX3YsrSM8hLn35yMVq-gzGzoHsz",
  appKey: "vpslFNPbTpcTFj4XHIGHP9eH",
  serverURL: "https://co2hyysx.lc-cn-n1-shared.com"
})
console.log("AV init...")
const Auth = {
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then((user) => {
        console.log(`注册成功。${user}`)
        resolve(user)
      }, (error) => {
        console.log(`注册失败：${error}`)
        reject(error)
      })
    })
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then((user) => {
        console.log(`登录成功。${user}`)
        resolve(user)
      }, (error) => {
        console.log(`登录失败：${error}`)
        reject(error)
      });
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