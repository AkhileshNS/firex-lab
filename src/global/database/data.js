// External Modules
import {isUString} from 'elegant-standard';

/*
  Params:
  >Path [String] - cannot be empty

  Adjustments
  >Path - must be lowercase and cannot contain spaces and special characters
*/
export const get = async (firebase, Path) => {
  if (!isUString(Path)) {
    return {err: "Passed arguments are invalid", res: null};
  }

  let path = Path.toLowerCase().replace(/[. ]/g, "_");

  try {
    let snap = await firebase.database().ref(path).once('value')
    return {
      err: snap.exists() ? null : "Data doesn't exist",
      res: snap.exists() ? snap.val() : null 
    };
  } catch(err) {
    return {err, res: null}
  } 
}

/*
  Params:
  >Path [String] - cannot be empty

  Adjustments
  >Path - must be lowercase and cannot contain spaces and special characters
*/
export const set = async (firebase, Path, value, keyInPath, res) => {
  if (!isUString(Path)) {
    return {err: "Passed arguments are invalid", res: null};
  }

  let path = Path.toLowerCase().replace(/[. ]/g, "_");

  if (keyInPath) {
    let keys = path.split("/");
    value = value[keys[keys.length-1]];
  }

  try {
    await firebase.database().ref(path).set(value)
    return {err: null};
  } catch (err) {
    return {err};
  }
}