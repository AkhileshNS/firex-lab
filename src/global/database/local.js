// External Modules
import db from './dexie';

export const get = async () => {
  try {
    let res = await db.projects.toArray();
    return {err: null, res};
  } catch (err) {
    return {err, res: null};
  }
}

export const set = async config => {
  try {
    await db.projects.put({
      id: 1,
      ...config
    });
    return {err: null};
  } catch (err) {
    return {err};
  }
}