import { makeAutoObservable } from "mobx";
import { Image } from "../models";

class ImageStore {
  files = []
  names = []
  imgs = []
  isUploading = false

  constructor() {
    makeAutoObservable(this);
  }
  setFile(file) {
    this.files.push(file);
  }
  setName(name) {
    this.names.push(name);
  }
  upload() {
    this.isUploading = true;
    let promises = [];
    for (let i = 0; i < this.files.length; i++) {
      promises.push(Image.upload(this.names[i], this.files[i]));
    }
    return new Promise((resolve, reject) => {
      Promise.allSettled(promises).then((result) => {
        result.map((item) => { this.imgs.push(item.value) })
        resolve(this.imgs);
      }, (error) => {
        console.log(error);
        reject(error)
      });
      this.isUploading = false;
    })

  }
}

export default new ImageStore();
