import { makeAutoObservable } from 'mobx'
import { Auth, Image } from '../models/index'

class UserStore {
  currentUser = null
  imgNumber = 0
  constructor() {
    makeAutoObservable(this)
  }
  getCurrentUser() {
    this.currentUser = Auth.getCurrentUser()
  }
  resetCurrentUser() {
    this.currentUser = null
  }
  getTotal() {
    Image.getTotal().then((res) => (this.imgNumber = res))
  }
}

export default new UserStore()
