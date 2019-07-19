import firebase from 'firebase/app';
import 'firebase/database';

export const getInstance = config => {
  firebase.initializeApp(config);
  return firebase;
}