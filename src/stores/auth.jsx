import { makeAutoObservable } from 'mobx'
import { Auth } from '../models/index'
import UserStore from './user'
import HistoryStore from './history'
import ImageStore from './image'

class AuthStore {
  values = {
    username: '',
    password: '',
  }
  constructor() {
    makeAutoObservable(this)
  }
  setUsername(username) {
    this.values.username = username
  }
  setPassword(password) {
    this.values.password = password
  }
  login() {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password)
        .then((user) => {
          UserStore.getCurrentUser()
          resolve(user)
        })
        .catch((error) => {
          UserStore.resetCurrentUser()
          HistoryStore.resetHistory()
          ImageStore.resetImageStore()
          reject(error)
        })
    })
  }
  register() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password)
        .then((user) => {
          UserStore.getCurrentUser()
          resolve(user)
        })
        .catch((error) => {
          UserStore.resetCurrentUser()
          HistoryStore.resetHistory()
          ImageStore.resetImageStore()
          reject(error)
        })
    })
  }
  logout() {
    UserStore.resetCurrentUser()
    HistoryStore.resetHistory()
    ImageStore.resetImageStore()
    this.values = {
      username: '',
      password: '',
    }
    Auth.logout()
  }
}

export default new AuthStore()
