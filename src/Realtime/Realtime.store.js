// External Modules
import { decorate, observable, action } from "mobx";

// Global Constants
import {themes} from 'global/constants';

class RealtimeStore {
  code = ""
  selected = {
    theme: themes[0],
    fontSize: 14
  }

  setCode = newCode => this.code = newCode;

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