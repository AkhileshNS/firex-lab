import { decorate, observable, action } from "mobx";

class HomeStore {
  code = ""

  setCode = newCode => this.code = newCode;
}

decorate(HomeStore, {
  code: observable,

  setCode: action
});

export default new HomeStore();