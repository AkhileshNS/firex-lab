// External Modules
import { decorate, observable, action } from "mobx";
import {isSame} from 'elegant-standard';
import {toast} from 'react-toastify';

// Global Database
import * as db from 'global/database';

class AppStore {
  trigger = true;
  currRoute = "Realtime";
  selected = 0;
  visible = false;
  project = {
    name: "",
    apiKey: "",
    appId: "",
    getConfig() {
      let self = this;
      return {
        apiKey: self.apiKey,
        authDomain: `${self.name}.firebaseapp.com`,
        databaseURL: `https://${self.name}.firebaseio.com`,
        projectId: `${self.name}`,
        storageBucket: `${self.name}.appspot.com`,
        messagingSenderId: self.appId.slice(":")[1],
        appId: self.appId 
      }
    }
  }

  startTrigger = () => this.trigger = true;
  setRoute = route => this.currRoute = route;
  setSelected = selected => this.selected = selected;
  setVisible = visible => this.visible = visible;

  setProject = project => {
    let count = 0;
    if ("name" in project && !isSame(project.name, this.project.name)) {
      this.project.name = project.name;
      count++;
    }
    if ("apiKey" in project && !isSame(project.apiKey, this.project.apiKey)) {
      this.project.apiKey = project.apiKey;
      count++;
    }
    if ("appId" in project && !isSame(project.appId, this.project.appId)) {
      this.project.appId = project.appId;
      count++;
    }
    if (count===3) {
      toast.success("Project " + this.project.name + " has been successfully loaded", {
        position: toast.POSITION.TOP_RIGHT
      });
      db.firebase.setInstance(this.project.getConfig(), this.project.name);
    } else {
      toast.error("Error: project " + this.project.name + " coud not be loaded", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
}

decorate(AppStore, {
  trigger: observable,
  currRoute: observable,
  selected: observable,
  project: observable,
  visible: observable,

  startTrigger: action,
  setRoute: action,
  setSelected: action,
  setProject: action,
  setVisible: action
});

export default new AppStore();