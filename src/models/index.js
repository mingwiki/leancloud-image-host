import AV, { User } from 'leancloud-storage';
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
const Image = {
  upload(name, file) {
    return new Promise((resolve, reject) => {
      const avFile = new AV.File(name, file);
      const img = new AV.Object('images');
      avFile.save({ keepFileName: false }).then((av) => {
        img.add('attachments', av);
        img.set('owner', User.current())
        img.save().then((img) => resolve(img), (error) => reject(error))
      }, (error) => reject(error));
    })
  }
}
export { Auth, Image }