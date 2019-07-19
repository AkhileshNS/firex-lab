// External Modules
import {isObject} from 'elegant-standard';

// Global Database
import * as db from 'global/database';

export const getData = async (path) => {
  if (path==="") {
    console.log(path);
    return {err: "Passed arguments are invalid"};
  }

  try {
    let firebase = db.firebase.getInstance();

    let {err, res} = await db.data.get(firebase, path);

    if (err) {
      return {err};
    }

    let keyInPath = false;

    if (!isObject(res)) {
      let lastKey = path.split("/");
      lastKey = lastKey[lastKey.length-1];
      res = {
        [lastKey]: res
      }
      keyInPath = true;
    }

    return {err: null, value: JSON.stringify(res, null, 2), keyInPath};
  } catch (err) {
    return {err};
  }
}

export const setData = (path, value, keyInPath) => {
  if (path!=="") {
    let firebase = db.firebase.getInstance();
    db.data.set(firebase, path, JSON.parse(value), keyInPath, status => console.log(status));
  }
};