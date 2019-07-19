import { decorate, observable, action } from "mobx";

class RealtimeStore {
  code = ""

  setCode = newCode => this.code = newCode;
}

decorate(RealtimeStore, {
  code: observable,

  setCode: action
});

export default new RealtimeStore();