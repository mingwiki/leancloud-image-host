import { makeAutoObservable } from "mobx";
import { Image } from "../models/index";
import { message } from "antd";

class HistoryStore {
  list = [];
  isUploading = false;
  maxPage = 2;
  constructor() {
    makeAutoObservable(this);
  }
  append(list) {
    this.list = this.list.concat(list);
  }
  setIsUploading(isUploading) {
    this.isUploading = isUploading;
  }
  setMaxPage() {
    this.maxPage++;
  }
  query({ page, limit }) {
    this.setIsUploading(true);
    Image.query({ page, limit })
      .then(
        (list) => {
          this.append(list);
          this.hasMore = list.length === this.limit;
        },
        (err) => {
          message.error(err.message);
        }
      )
      .finally(() => {
        this.setIsUploading(false);
      });
  }
  resetHistory() {
    this.list = [];
    this.isUploading = false;
    this.maxPage = 2;
  }
}
export default new HistoryStore();
