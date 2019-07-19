// External Modules
import {isObject} from 'elegant-standard';

// Global Database
import * as db from 'global/database';

export const getData = async (config, path) => {
  if (config.name==="" || path==="") {
    console.log(config);
    console.log(path);
    return {err: "Passed arguments are invalid"};
  }

  try {
    let firebase = db.firebase.getInstance(config);

    let value = await db.data.get(firebase, path);
    let keyInPath = false;

    if (isObject(value)) {
      let lastKey = path.split("/");
      lastKey = lastKey[lastKey.length-1];
      value = {
        [lastKey]: value
      }
      keyInPath = true;
    }

    return {err: null, value, keyInPath};
  } catch (err) {
    return {err};
  }
}

export const setData = (config, path, value, keyInPath) => {
  if (config.name!=="" && path!=="") {
    let firebase = db.firebase.getInstance(config);
    db.data.set(firebase, path, value, keyInPath, status => console.log(status));
  }
}