// External Modules
import { decorate, observable, action } from "mobx";

// Global Constants
import {themes} from 'global/constants';

class RealtimeStore {
  code = {
    value: "",
    path: "",
    keyInPath: false

  }
  selected = {
    theme: themes[0],
    fontSize: 14
  }

  setCode = code => {
    if ("value" in code) {
      this.code.value = code.value;
    }
    if ("path" in code) {
      this.code.path = code.path;
    }
    if ("keyInPath" in code) {
      this.code.keyInPath = code.keyInPath;
    }
  }

  setSelected = selected => {
    if ("theme" in selected) {
      this.selected.theme = selected.theme;
    } 
    if ("fontSize" in selected) {
      this.selected.fontSize = selected.fontSize;
    }
  }
}

decorate(RealtimeStore, {
  code: observable,
  selected: observable,

  setCode: action,
  setSelected: action
});

export default new RealtimeStore();