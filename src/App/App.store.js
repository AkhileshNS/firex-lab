import { decorate, observable, action } from "mobx";

class AppStore {
  trigger = false;
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
    if ("name" in project) {
      this.project.name = project.name;
    }
    if ("apiKey" in project) {
      this.project.apiKey = project.apiKey;
    }
    if ("appId" in project) {
      this.project.appId = project.appId;
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