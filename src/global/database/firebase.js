import firebase from 'firebase/app';
import 'firebase/database';

let app = null;

export const setInstance = (config, name) => {
  app = firebase.initializeApp(config, name);
}

export const getInstance = () => app;